import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../..';
import { loadCategories } from 'src/api/load-categories';
import { CategoryHttp } from '../../../services/types/product-types';

const initialState = {
  loading: false,
  error: '',
  products: [],
};

export const fetchProductsAll = createAsyncThunk(
  'products/fetchAll',
  async (categoryName?: string) => {
    const response = await loadCategories(categoryName);
    console.log('response  ', response);
    return response;
  },
);

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    all: (state, payload) => {
      // console.log('date payload', state, payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAll.pending, (state, payload) => {
        state.loading = true;
      })
      .addCase(fetchProductsAll.fulfilled, (state) => {
        state.loading = false;
        console.log('o meu state', state);
      })
      .addCase(fetchProductsAll.rejected, (state) => {
        (state.loading = false), (state.error = 'Produto não encontrada');
      });
  },
});

export const { all } = products.actions;
export default products.reducer;
