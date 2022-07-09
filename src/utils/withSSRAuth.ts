import decode from 'jwt-decode';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';
import { AuthTokenError } from '../services/errors/AuthTokenError';
// import { validadeUserPermission } from './validadeUserPermission';

// type WithSSRAuthOptions = {
//   permissions?: string[];
//   roles?: string[];
// };
export function withSSRAuth<P>(
  fn: GetServerSideProps<P>,
  // options?: WithSSRAuthOptions,
) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx); //Passar o primeiro parametro o contexto, porque esta do lado do servidor
    const token = cookies['nextauth.token'];

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, 'AUTH');

        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }
    }
  };
}
