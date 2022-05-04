import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { theme } from 'src/styles/theme';
import { GlobalStyles } from 'src/styles/global-styles';
import { seedDB } from '../mock/seedDB';
import db from '../../db.json';

import '../../node_modules/swiper/swiper-bundle.min.css';
import '../../node_modules/swiper/swiper.min.css';

seedDB();

function MyApp({ Component, pageProps }: AppProps) {
  // console.log('meu db', db);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
