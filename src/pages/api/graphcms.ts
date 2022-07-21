// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { clientGraphCMS } from '@services/graphql/client';
import { CREATE_NEXT_USER_BY_EMAIL } from '@services/graphql/mutations';
import {
  GET_USER_BY_EMAIL,
  GRAPHQL_QUERY_PAGINATION_WITH_FILTERS,
} from '@services/graphql/queries';
import { compare, hash } from 'bcrypt';
import request from 'graphql-request';
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
  const { email, password } = req.body;
  console.log('email, password ', email, password);

  try {
    const response = await clientGraphCMS.request(GET_USER_BY_EMAIL, {
      email,
    });
    console.log('responseeeeeeeeeeeeedsdseeee', response);
  } catch (error) {
    console.log('error', error);
  }

  // if (!user) {
  //   const { newUser } = await clientGraphCMS.request(
  //     CREATE_NEXT_USER_BY_EMAIL,
  //     {
  //       email,
  //       password: await hash(password, 12),
  //     },
  //   );

  //   return {
  //     id: newUser.id,
  //     username: email,
  //     email,
  //   };
  // }

  // const isValid = await compare(password, user.password);

  // if (!isValid) {
  //   throw new Error('Wrong credentials. Try again.');
  // }

  // res.setHeader('id', user.id);
  // res.setHeader('username', email);

  res.end();

  // return res.status(200).json({ name: 'John Doe' });
}
