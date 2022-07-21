import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Brand, Color, Size } from '../../../services/types/product-types';

interface ColorsInfo {
  count: number;
  colors: { node: { id: string; name: string } }[];
}

interface BrandsInfo {
  count: number;
  brands: { node: { id: string; name: string } }[];
}

interface SizesInfo {
  count: number;
  sizes: { node: { id: string; name: string } }[];
}

interface IFilter {
  colorsInfo?: ColorsInfo;
  sizesInfo: SizesInfo;
  brandsInfo?: BrandsInfo;
}

interface ReduxState {
  loading: boolean;
  error: boolean;
  filters: IFilter;
}

const initialState: ReduxState = {
  loading: false,
  error: false,
  filters: {} as IFilter,
};

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilters: (
      { filters },
      { payload: filtersPayload }: PayloadAction<IFilter>,
    ) => {
      console.log('payload', filters);
      if (!filtersPayload) return;
      filters = filtersPayload;
    },
    // search: (state, payload) => {
    //   // console.log('date payload', state, payload);
    // },
  },
});

export const { addFilters } = filters.actions;
export default filters.reducer;
