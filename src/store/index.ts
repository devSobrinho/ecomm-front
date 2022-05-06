import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import categoriesReducer from './modules/Categories/Categories.store';
import productReducer from './modules/Products/Products.store';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
