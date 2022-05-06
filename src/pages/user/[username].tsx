import { GetServerSideProps } from 'next';

export type IUserNameProps = {
  title?: string;
};

const UserName = ({ title }: IUserNameProps): JSX.Element => {
  return <h1>username: {title}</h1>;
};

export default UserName;

// lado do servidor
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log('meu ctxxx', ctx);
  const { username } = ctx.query;

  // validação

  return {
    props: { title: username },
  };
};
