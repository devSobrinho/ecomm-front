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

//react -> client

// rota q precisa de auth -> dashboard
// next getServeSide -> redirect
// react dashboard e dentro do component valido ERRADO
// react middleware Auth -> dashboard
// Routes <Route as={<Auth><Dashboard/></Auth>}

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async (ctx) => {
    const cookies = parseCookies(ctx);
    console.log(cookies);
    const session = await getSession({ req: ctx.req });
    console.log('session', session);

    return {
      props: {},
    };
  },
);
