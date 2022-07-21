import { withSSRGuest } from '@utils/withSSRGuest';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { getSession } from 'next-auth/react';

import { Login } from 'src/layout/Login';

export default function test(): JSX.Element {
  return (
    <>
      <main
        style={{
          height: '100vh',
        }}
      >
        <div>
          <Login />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async (ctx) => {
    const cookies = parseCookies(ctx);

    const session = await getSession({ req: ctx.req });

    return {
      props: {},
    };
  },
);
