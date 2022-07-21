import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@services/types/product-types';

// export interface ProductsList {
//   id: string;
//   name: string;
//   amount: number;
//   price: number;
//   stock: number;
//   images: {
//     url: string;
//     alt: string;
//   }[];
//   color: string[];
//   image: {
//     url: string;
//     alt: string;
//   };
// }

export type ProductsList = {
  amount: number;
} & Omit<IProduct, 'reviews'>;

export interface CartState {
  productsList: ProductsList[];
  isCartOpen: boolean;
  loading: boolean;
}

export const initialState: CartState = {
  productsList: [],
  isCartOpen: false,
  loading: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ product: ProductsList }>) => {
      if (
        state.productsList.find(
          (product) => product.id === action.payload.product.id,
        )
      ) {
        if (
          state.productsList.find(
            (product) =>
              product.id === action.payload.product.id &&
              product.amount >= product.stock,
          )
        ) {
          return;
        }
        console.log('o type action', action.type);

        state.productsList.find(
          (product) =>
            product.id === action.payload.product.id && product.amount + 1,
        );
        return;
      }
      state.productsList.push(action.payload.product);
    },

    removeProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.productsList = state.productsList.filter(
        (product) => product.id !== action.payload.id,
      );
    },

    incrementProduct: (state, action: PayloadAction<{ id: string }>) => {
      if (
        state.productsList.find(
          (product) =>
            product.id === action.payload.id && product.amount >= product.stock,
        )
      ) {
        return;
      }

      state.productsList.map(
        (product) => product.id === action.payload.id && product.amount + 1,
      );
    },

    decrementProduct: (state, action) => {
      if (
        state.productsList.find(
          (product) => product.id === action.payload.id && product.amount === 1,
        )
      )
        return;
      state.productsList.map(
        (product) => product.id === action.payload.id && product.amount - 1,
      );
    },

    openModalCart: (state) => {
      if (state.isCartOpen === true) return;
      state.isCartOpen = true;
    },

    closeModalCart: (state) => {
      if (state.isCartOpen === false) return;
      state.isCartOpen = false;
    },

    reset: (state) => {
      state.productsList = initialState.productsList;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementProduct,
  decrementProduct,
  // subTotalProduct,
  // total,
  openModalCart,
  closeModalCart,
  // reset,
} = cartSlice.actions;

export default cartSlice.reducer;
