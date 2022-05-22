import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../../';
import { loadCategories } from 'src/api/load-categories';
import { CategoryHttp } from '../../../services/types/product-types';

const initialState = {
  loading: false,
  error: '',
  categories: [],
};

export const fetchCategoryByName = createAsyncThunk(
  'categories/fetchByName',
  async (categoryName?: string) => {
    console.log('aq p ', categoryName);

    const response = await loadCategories(categoryName);
    return response;
  },
);

// react query -> cache // time

// redux store category -> subCategory -> products[]
// cookies // time

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    search: (state, payload) => {
      // console.log('date payload', state, payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryByName.pending, (state, payload) => {
        state.loading = true;
      })
      .addCase(fetchCategoryByName.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchCategoryByName.rejected, (state) => {
        (state.loading = false), (state.error = 'Categoria não encontrada');
      });
  },
});

export const { search } = categories.actions;
export default categories.reducer;
