import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setCookie, destroyCookie } from 'nookies';

interface Auth {
  email: string;
  name?: string;
  token: string;
}

export interface AuthState {
  auth: Auth;
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export const initialState: AuthState = {
  auth: {} as Auth,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: auth }: PayloadAction<Auth>) => {
      state.auth = auth;
      state.isLoggedIn = true;

      setCookie(null, 'AUTH', JSON.stringify(state.auth), {
        maxAge: 30 * 24 * 60 * 60,
        // httpOnly: true,
        path: '/',
      });
    },
    reset: (state) => {
      destroyCookie(null, 'AUTH');
      state.isLoggedIn = false;
      state.auth = initialState.auth;
      state.isError = initialState.isError;
      state.isLoading = initialState.isLoading;
      state.isSuccess = initialState.isSuccess;
      console.log('novo state', state);
    },
  },
});

export const { setCredentials, reset } = authSlice.actions;

export default authSlice.reducer;
