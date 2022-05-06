import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@services/api/api';
import { CategoryHttp } from '@services/types/product-types';
import { AxiosResponse } from 'axios';

type HttpResponse<T> = AxiosResponse<T>;

export const loadProducts = async (categoryName?: string) => {
  const query = `${categoryName ? `?name=${categoryName}` : ''}`;
  const response: HttpResponse<CategoryHttp[]> = await api.get(
    `/products${query ?? ''}`,
  );

  return { ...response, totalPages: response.data.count };
};
