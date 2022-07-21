import { PricesCard } from '@components/PricesCard';
import { ReviewSummary } from '@components/Review';
import { ProductData } from '@services/types/product-types';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { Main } from 'src/layout/Main';
import ProductTemplates from 'src/templates/Product';

const Product: NextPage<{ product: any }> = ({
  // eslint-disable-next-line react/prop-types
  product,
}): JSX.Element => {
  console.log('os p', product);

  const { push } = useRouter();

  return (
    <>
      <Main>
        <ProductTemplates product={product} />
      </Main>
    </>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  let paths = [];

  try {
    const response = await fetch(`http://localhost:5000/products`);
    const data = await response.json();
    paths = data.map((product: any) => {
      return {
        params: { uid: product.id },
      };
    });
  } catch (error) {
    paths = [];
  }

  return {
    paths: paths.slice(0, 10),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  console.log('params', params);

  let product = {};

  try {
    const response = await fetch(
      `http://localhost:5000/products/${params?.uid}`,
    );

    product = await response.json();
  } catch (error) {
    console.log('error', error);
    product = {};
  }
  return {
    props: { product },
    revalidate: 1000 * 60 * 60 * 12,
  };
};
