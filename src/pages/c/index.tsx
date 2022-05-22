import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Main } from 'src/layout/Main';
import { ListProductsCategoryOne } from 'src/templates/ListProducts';
import { api } from '@services/api/api';

const Category: NextPage = (): JSX.Element => {
  api.get('product/10').then((data) => {
    console.log('meu produto get 10', data);
  });

  api.get('product/2').then((data) => {
    console.log('meu produto get 2', data);
  });

  return (
    <>
      <Main>
        <ListProductsCategoryOne />
      </Main>
    </>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log('server side');

  // await api.get('products').then((data) => {
  //   console.log('data', data);
  // });
  return {
    props: {},
  };
};
