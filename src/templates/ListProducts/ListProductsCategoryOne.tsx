import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useProductsList } from 'src/hooks/useProducts';
import { Text } from '@components/Text';
import { FilterCategoryOne } from 'src/layout/Filters';
import { ProductList } from 'src/layout/ProductList';
import * as Styled from './styles';

const globalState = {
  produtosState: [],
  themeState: [],
};
globalState.produtosState;

export type ListProductsCategoryOneProps = {
  title?: string;
};

export const ListProductsCategoryOne = ({
  title,
}: ListProductsCategoryOneProps): JSX.Element => {
  const {
    query: { category, subcategory, Show, page },
    asPath,
  } = useRouter();

  const [perPage, setPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const currentQuery = asPath.split('?')[1];
  const [queryCurrent, setQueryCurrent] = useState(currentQuery);

  const { data, isLoading, isFetching, error, refetch } = useProductsList(
    1,
    queryCurrent,
  );

  useEffect(() => {
    const newCurrentQuery = asPath.split('?')[1];
    console.log('entrou');

    setQueryCurrent(newCurrentQuery);
  }, [asPath]);

  useEffect(() => {
    if (Show && !isNaN(Number(Show))) {
      setPerPage(Number(Show));
    }
  }, [Show]);

  useEffect(() => {
    if (page && !isNaN(Number(page))) {
      setCurrentPage(Number(page));
    }
  }, [page]);

  const products = data?.data.products.map((product) => {
    return {
      id: product.id,
      title: product.name,
      currentValue: product.currentValue,
      previousValue: product.previousValue,
      rate: product.rate,
      img: product.img,
      description: product.description,
      stock: product.stockQuantity,
      colors: product.colors,
    };
  });

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
        <ProductList
          products={products}
          productsCount={data?.data.count}
          perPage={perPage}
          count={data?.data.count}
          currentPage={currentPage}
        />
      </Styled.Wrapper>
    </>
  );
};
