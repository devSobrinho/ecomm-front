import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // authorization: {
      //   params: {
      //     prompt: 'consent',
      //     access_type: 'offline',
      //     response_type: 'code',
      //   },
      // },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === 'google') {
        // console.log('profile', profile);
        // console.log('account', account);

        // return (
        //   profile.email_verified && profile?.email?.endsWith('@example.com')
        // );

        return true;
      }

      return true; // Do different verification for other providers that don't have `email_verified`e; /
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log('jwt', token, user, account, profile, isNewUser);

      return { ...token };
    },

    session({ session, token, user }) {
      // console.log('a session', session, token, user);

      return { ...session, token };
    },
  },
});
