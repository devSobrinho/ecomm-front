import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useProductsList } from 'src/hooks/useProducts';
import { Text } from '@components/Text';
import { FilterCategoryOne } from 'src/layout/Filters';
import { ProductList } from 'src/layout/ProductList';
import * as Styled from './styles';
import { useAppDispatch } from '../../store';
import { addFilters } from '@store/modules/Filters/Filters.store';

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
  const dispatch = useAppDispatch();
  const [perPage, setPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  // const currentQuery = asPath.split('?')[1];
  // const [queryCurrent, setQueryCurrent] = useState(currentQuery);
  const { query } = useRouter();

  const { data, isLoading, isFetching, error, refetch } = useProductsList(
    1,
    query,
  );

  useEffect(() => {
    if (data) {
      dispatch(
        addFilters({
          colorsInfo: data.colorsInfo,
          brandsInfo: data.brandsInfo,
          sizesInfo: data.sizesInfo,
        }),
      );
    }
  }, [data, dispatch]);

  // useEffect(() => {
  //   const newCurrentQuery = asPath.split('?')[1];

  //   setQueryCurrent(newCurrentQuery);
  // }, [asPath]);

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

  console.log('dataaaa', data?.productsInfo.products);

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
        <FilterCategoryOne
          brandsInfo={data?.brandsInfo}
          colorsInfo={data?.colorsInfo}
          sizesInfo={data?.sizesInfo}
          priceProductMax={data?.priceMaxProduct}
          priceProductMin={data?.priceMinProduct}
        />
        {data?.productsInfo && (
          <ProductList
            products={data.productsInfo.products}
            perPage={perPage}
            count={data?.productsInfo.count}
            currentPage={currentPage}
          />
        )}
      </Styled.Wrapper>
    </>
  );
};
