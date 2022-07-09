import { GetServerSideProps, NextPage } from 'next';

import { Main } from 'src/layout/Main';
import { ListProductsCategoryOne } from 'src/templates/ListProducts';

const Category: NextPage = (): JSX.Element => {
  return (
    <Main>
      <ListProductsCategoryOne />
    </Main>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};
