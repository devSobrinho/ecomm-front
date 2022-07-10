import { useQuery } from 'react-query';

import { api, loadProducts } from '@services/api/api';
import { Product } from '@services/types/product-types';
import { ParsedUrlQuery } from 'querystring';

type GetProductListProps = {
  pageParam?: number;
  queryParam?: ParsedUrlQuery;
};

export const getProduct = async (productName: string): Promise<Product> => {
  const response = await api.get(`product/${productName}`);

  return response.data;
};

// CREATE REACT QUERY TO PRODUCT LIST
// export const getProductList = async ({
//   pageParam = 1,
//   queryParam,
// }: GetProductListProps) => {
//   const offset = 12;
//   let limit = 12;
//   const queryParamSplit = queryParam?.split('&Show=');
//   console.log('queryParamaaaa', queryParamSplit);

//   if (queryParamSplit && queryParamSplit.length > 1) {
//     limit = Number(queryParamSplit[1].split('&')[0]);
//   }

//   const page = `limit=${limit}&offset=${(pageParam - 1) * offset}`;

//   const isQueryParam = `${queryParam && `&${queryParam}`}`;
//   const response = await api.get(`/products?${page}${isQueryParam}`);

//   return { ...response, totalPages: response.data.count };
// };

export const getProductList = async ({
  pageParam = 1,
  queryParam,
}: GetProductListProps) => {
  const categoryName = queryParam?.category?.toString();
  const subCategoryName = queryParam?.subcategory?.toString();

  const { countProduct, products, countBrand } = await loadProducts({
    categoryName,
    subCategoryName,
    last: 12,
  });

  return {
    countProduct,
    products,
    countBrand,
  };
};

export function useProductsList(page: number, query?: ParsedUrlQuery) {
  return useQuery(
    ['products', query],
    () => getProductList({ pageParam: page, queryParam: query }),
    {
      staleTime: 1000,
    },
  );
}
