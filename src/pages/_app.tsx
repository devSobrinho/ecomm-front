import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { theme } from 'src/styles/theme';
import { GlobalStyles } from 'src/styles/global-styles';
import makeServer from '@services/mirage';
import store from '../store';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
