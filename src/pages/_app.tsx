import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ThemeProvider } from 'styled-components';
import { theme } from 'src/styles/theme';
import { GlobalStyles } from 'src/styles/global-styles';
// import makeServer from '../services/mirage/server';
import { makeServer as makeServerTest } from '../services/mirage/server-test';
import store from '../store';
import { queryClient } from '@services/react-query/queryClient';

// miragejs removed of project
// if (process.env.NODE_ENV === 'development') {
//   makeServer({ environment: process.env.NODE_ENV });
// }
// ###Testing
if (process.env.NODE_ENV === 'development') {
  makeServerTest();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyles />
          </ThemeProvider>
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
