import { useQuery } from 'react-query';

import { api, loadAllInfoProducts } from '@services/api/api';
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

export const getAllInfoProducts = async ({
  pageParam = 1,
  queryParam,
}: GetProductListProps) => {
  const categoryName = queryParam?.category?.toString();
  const subCategoryName = queryParam?.subcategory?.toString();
  const colorName = queryParam?.color?.toString();
  const brandName = queryParam?.brand?.toString();
  const priceRangeQuery = Number(queryParam?.range?.toString());
  const priceRange = isNaN(priceRangeQuery) ? undefined : priceRangeQuery;

  const {
    productsInfo,
    sizesInfo,
    colorsInfo,
    brandsInfo,
    priceMinProduct,
    priceMaxProduct,
  } = await loadAllInfoProducts({
    categoryName,
    subCategoryName,
    colorName,
    brandName,
    last: 12,
    priceRange,
  });

  return {
    productsInfo,
    sizesInfo,
    colorsInfo,
    brandsInfo,
    priceMinProduct,
    priceMaxProduct,
  };
};

export function useProductsList(page: number, query?: ParsedUrlQuery) {
  return useQuery(
    ['products', query],
    () => getAllInfoProducts({ pageParam: page, queryParam: query }),
    {
      staleTime: 30000,
    },
  );
}
