import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { setCookie } from 'nookies';
import { useDispatch } from 'react-redux';

import { setCredentials } from '../../store/modules/Auth/Auth.store';
import { useRouter } from 'next/router';
import { withSSRGuest } from '@utils/withSSRGuest';

interface ProviderProps {
  user: {
    email: string;
  };
  token: string;
}

export default function Provider({ user, token }: ProviderProps): JSX.Element {
  const dispatch = useDispatch();
  const { push } = useRouter();

  if (user) {
    dispatch(
      setCredentials({
        email: user.email,
        token: token,
      }),
    );
    push('/');
  }

  return <></>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ req: ctx.req });

  if (!session || !session.user) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }

  setCookie(
    ctx,
    'AUTH',
    JSON.stringify({
      user: session.user,
      token: session.expires,
    }),
  );
  return {
    props: {
      user: session.user,
      token: session.expires,
    },
  };
};
