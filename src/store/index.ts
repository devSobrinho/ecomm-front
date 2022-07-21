import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';
import { useDispatch, useSelector } from 'react-redux';

import categoriesReducer from './modules/Categories/Categories.store';
import productReducer from './modules/Products/Products.store';
import cartReducer from './modules/Cart/Cart.store';
import whishListReducer from './modules/Wishlist/Wishlist.store';
import authReducer from './modules/Auth/Auth.store';
import pokemonsReducer from './modules/Pokemons/Pokemons.store';
import filtersReducer from './modules/Filters/Filters.store';
import { pokemonApi } from './modules/Pokemons/PokemonSearch.store';
// import logger from 'redux-logger';

const reducers = combineReducers({
  // categories: categoriesReducer,
  // products: productReducer,
  // filters: filtersReducer,
  cart: cartReducer,
  wishList: whishListReducer,
  auth: authReducer,
  // pokemons: pokemonsReducer,
  // [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const persistConfig = {
  key: 'ecomm',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// const middleware = [thunk, immutableStateInvariant, serializableStateInvariant];
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: {
        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
      },
    }),
  // .concat(pokemonApi.middleware),
  // .concat(immutableInvariantMiddleware),
});

export const useAppSelector = () => useSelector((state: RootState) => state);
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export default store;
