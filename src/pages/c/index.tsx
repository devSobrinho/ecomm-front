import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Main } from 'src/layout/Main';

export type CategoryProps = {
  title?: string;
};

const Category: NextPage = ({ title }: CategoryProps): JSX.Element => {
  const outroROuter = useRouter();
  console.log('AQQQQQQQQQQQQQ', outroROuter);

  return (
    <>
      <Main>a</Main>
    </>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log('meu log', ctx);

  return {
    props: {},
  };
};
