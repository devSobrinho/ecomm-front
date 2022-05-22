import { Text } from '@components/Text';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useProductsList } from 'src/hooks/useProducts';

import { FilterCategoryOne } from 'src/layout/Filters';
import { ProductList } from 'src/layout/ProductList';
import { productsCategoryFeminine1 as mockProductsFeminine } from '../../mock/components/products/productsCategoryFeminine';
import * as Styled from './styles';

export type ListProductsCategoryOneProps = {
  title?: string;
};

export const ListProductsCategoryOne = ({
  title,
}: ListProductsCategoryOneProps): JSX.Element => {
  const {
    query: { category, subcategory, Show },
    asPath,
  } = useRouter();
  const currentQuery = asPath.split('?')[1];
  const [queryCurrent, setQueryCurrent] = useState(currentQuery);
  const rota = useRouter();

  const { data, isLoading, isFetching, error, refetch } = useProductsList(
    1,
    queryCurrent,
  );

  useEffect(() => {
    const newCurrentQuery = asPath.split('?')[1];
    console.log('entrou');

    setQueryCurrent(newCurrentQuery);
  }, [asPath]);

  console.log('data query', data);

  const products = data?.data.products.map((product) => {
    return {
      id: product.id,
      title: product.name,
      currentValue: product.currentValue,
      previousValue: product.previousValue,
      rate: 2,
      img: product.img,
      description: product.description,
    };
  });

  console.log('products respo', products);

  // const {} = useRouter();
  // const route = useRouter();

  // useEffect(() => {
  //   console.log('mudou a query');
  // }, [route.query]);

  return (
    <>
      <Styled.Header isSubCategory={!!subcategory ?? false}>
        <Text
          type="title-alternative"
          as="h2"
          text={category as string}
          isCapitalize
          isActive
        />
        {subcategory && (
          <>
            <Text
              type="title-alternative"
              as="h3"
              text={subcategory as string}
              isCapitalize
            />
          </>
        )}
      </Styled.Header>
      <Styled.Wrapper>
        <FilterCategoryOne />
        <ProductList products={products} />
        {/* <ProductList products={mockProductsFeminine()} /> */}
      </Styled.Wrapper>
    </>
  );
};
