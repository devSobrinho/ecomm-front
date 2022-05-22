import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../..';
import { loadCategories } from 'src/api/load-categories';
import { CategoryHttp } from '../../../services/types/product-types';

const initialState = {
  loading: false,
  error: '',
  filters: [],
};

// react query -> cache // time

// redux store category -> subCategory -> products[]
// cookies // time

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    add: (state, payload) => {
      console.log('payload', payload);

      // const newStateFilters = state.filters.map((filter) => {
      //   if (filter === payload) {
      //   }
      // });

      // return;
    },
    search: (state, payload) => {
      // console.log('date payload', state, payload);
    },
  },
});

export const { search } = filters.actions;
export default filters.reducer;
