import decode from 'jwt-decode';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';
import { AuthTokenError } from '../services/errors/AuthTokenError';

export function withSSRPermissionsSchool<P>(
  fn: GetServerSideProps<P>,
  // options?: WithSSRAuthOptions,
) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx); //Passar o primeiro parametro o contexto, porque esta do lado do servidor
    const roles = cookies['auth_permissions_roles'];

    //fetch verificar as roles para a rota school settings
    const responsePermissionRoteSchool = ['adm', 'director', 'financeiro'];
    const isPermission = responsePermissionRoteSchool.includes(roles);
    const userpermission = responsePermissionRoteSchool.find(
      (permission) => permission === roles,
    );

    if (!isPermission) {
      return {
        redirect: {
          destination: '/home',
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
