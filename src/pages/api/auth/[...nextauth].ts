import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { compare, hash } from 'bcrypt';
import { clientGraphCMS } from '@services/graphql/client';
import { GET_USER_BY_EMAIL } from '@services/graphql/queries';
import { CREATE_NEXT_USER_BY_EMAIL } from '@services/graphql/mutations';

export default NextAuth({
  // Configure one or more authentication providers
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'email',
        },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize({ email, password }: any) {
        const { user } = await clientGraphCMS.request(GET_USER_BY_EMAIL, {
          email,
        });

        console.log('user', user);

        if (!user) {
          // const { newUser } = await clientGraphCMS.request(
          //   CREATE_NEXT_USER_BY_EMAIL,
          //   {
          //     email,
          //     password: await hash(password, 12),
          //   },
          // );

          // return {id: newUser};
          return null;
        }

        const isValid = await compare(password, user.password);

        if (isValid) {
          return { id: user.id, email };
        }

        return null;
      },
    }),

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
        return true;
      }
      if (account.provider === 'credentials') {
        return true;
      }

      return false; // Do different verification for other providers that don't have `email_verified`e; /
    },
    async jwt({ token, user }) {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }
      console.log('entra q', token);

      return { ...token };
    },

    session({ session, token }) {
      if (token) {
        session.id = token.id;
      }
      return { ...session, token };
    },
  },
});
