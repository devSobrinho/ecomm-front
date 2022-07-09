import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import product from '@services/mirage/factories/product';

import { ProductsList } from '../Cart/Cart.store';

type ProductWishList = Omit<ProductsList, 'amount'>;

interface WishList {
  productsList: ProductWishList[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export const initialState: WishList = {
  productsList: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addProduct: (
      state,
      {
        payload: { product: productPayload },
      }: PayloadAction<{ product: ProductWishList }>,
    ) => {
      const isProductOnWishList = state.productsList.find(
        (product) => product.id === productPayload.id,
      );
      if (isProductOnWishList) return;
      state.productsList.push(productPayload);
    },
    removeProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.productsList = state.productsList.filter(
        (product) => product.id !== action.payload.id,
      );
    },
  },
});

export const { addProduct, removeProduct } = wishListSlice.actions;

export default wishListSlice.reducer;
