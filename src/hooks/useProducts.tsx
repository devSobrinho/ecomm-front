import { api } from '@services/api/api';
import { Product } from '@services/types/product-types';
import { useQuery } from 'react-query';

export const getProduct = async (productName: string): Promise<Product> => {
  const response = await api.get(`product/${productName}`);

  return response.data;
};

export const useProducts = (categories?: string) => {
  return useQuery(['products'], loadCategories, {
    getNextPageParam: (lastPage, pages) => {
      const totalPages = lastPage.data.count / 10;
    },
  });
};
