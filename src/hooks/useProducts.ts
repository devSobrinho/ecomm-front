import { useQuery } from 'react-query';

import { api } from '@services/api/api';
import { Product } from '@services/types/product-types';

type GetProductListProps = {
  pageParam?: number;
  queryParam?: string;
};

export const getProduct = async (productName: string): Promise<Product> => {
  const response = await api.get(`product/${productName}`);

  return response.data;
};

// CREATE REACT QUERY TO PRODUCT LIST
export const getProductList = async ({
  pageParam = 1,
  queryParam,
}: GetProductListProps) => {
  const offset = 12;
  let limit = 12;
  const queryParamSplit = queryParam?.split('&Show=');
  console.log('queryParamaaaa', queryParamSplit);

  if (queryParamSplit && queryParamSplit.length > 1) {
    limit = Number(queryParamSplit[1].split('&')[0]);
  }

  const page = `limit=${limit}&offset=${(pageParam - 1) * offset}`;

  const isQueryParam = `${queryParam && `&${queryParam}`}`;
  const response = await api.get(`/products?${page}${isQueryParam}`);

  return { ...response, totalPages: response.data.count };
};

export function useProductsList(page: number, query?: string) {
  return useQuery(
    ['products', query],
    () => getProductList({ pageParam: page, queryParam: query }),
    {
      staleTime: 1000,
    },
  );
}
