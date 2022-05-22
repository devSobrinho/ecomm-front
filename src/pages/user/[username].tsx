import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import Router, { useRouter } from 'next/router';
// import Router, { useRouter } from 'next/router';

export type IUserNameProps = {
  title?: string;
  price: number;
};

const UserName = ({ title, price }: IUserNameProps): JSX.Element => {
  const { query } = useRouter();

  return (
    <h1>
      username: {query.username}, price: U${price}
    </h1>
  );
};

export default UserName;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { username: 'joao' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // console.log('meu ctxxx', ctx);
  const { params } = ctx;

  return {
    props: { title: params?.username },
  };
};

// lado do servidor
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // console.log('meu ctxxx', ctx);
//   const { username } = ctx.query;
//   const param = ctx.params;
//   console.log('param', param);
//   console.log('username', username);
//   let price = 10;

//   // fetch username -> joao
//   //price 20
//   if (username === 'joao') {
//     price = 20;
//   }
//   // fetch
//   // validação

//   return {
//     props: { title: username, price },
//   };
// };
