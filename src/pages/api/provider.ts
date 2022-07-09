// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { setCookie } from 'nookies';

type Data = {
  name?: string;
  user?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const session = await getSession({ req });
  console.log('a session', session);

  if (session?.user?.email) {
    try {
      // fake requisicao para buscar usuario por email
      const response = await fetch(
        `http://localhost:5000/users?email=${session.user.email}`,
      );
      const data: any[] = await response.json();

      if (data.length === 0 || !data) {
        // fake post create account my backend
        await fetch('http://localhost:5000/register', {
          method: 'POST',
          body: JSON.stringify({
            email: session.user.email,
            password: '123456',
          }),
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        });

        return res.redirect('/api/provider');
      }
    } catch (error) {
      console.log('erro');
    }
  }

  if (session?.user) {
    setCookie(
      { res },
      'AUTH',
      JSON.stringify({ user: session.user, token: session.expires }),
    );
    // return res.redirect('/login');
    // return res.status(200).json({ user: session.user });
    return res.redirect('/api/provider');
  }

  return res.status(200).json({ name: 'John Doe' });
}
