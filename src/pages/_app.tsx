import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';

// import { makeServer as makeServerTest } from '../services/mirage/server-test';
import makeServer from '../services/mirage/server';
import { theme } from 'src/styles/theme';
import { GlobalStyles } from 'src/styles/global-styles';
import store, { persistor } from '../store';
import { queryClient } from '@services/react-query/queryClient';

import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#__next');

// miragejs removed of project
// if (process.env.NODE_ENV === 'development') {
//   makeServer({ environment: process.env.NODE_ENV });
// }
// ###Testing miragejs
// if (process.env.NODE_ENV === 'development') {
//   makeServerTest();
// }

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <SessionProvider session={session}>
                <Component {...pageProps} />
              </SessionProvider>
              <GlobalStyles />
            </ThemeProvider>
            <ToastContainer />
          </PersistGate>
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
