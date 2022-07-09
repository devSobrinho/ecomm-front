import { createGlobalStyle } from 'styled-components';
import { resetCSS } from './reset-css';

export const GlobalStyles = createGlobalStyle`

  ${resetCSS}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    /* font-family: ${({ theme }) => theme.font.family.primary}; */
    position: relative;
    overflow-x: hidden;

    & .ReactModal__Overlay{
      z-index: 9999;
      /* overflow: auto; */

      /* height: 100vh; */

      .ReactModal__Content{

        &::-webkit-scrollbar {
          display: none;
          width: 0;
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.default};
    font-weight: 400;
    /* margin: ${({ theme }) => theme.spacings.large} 0; */
  }

  p {
    /* margin: ${({ theme }) => theme.spacings.medium} 0; */
  }

  ul, ol {
    /* margin: ${({ theme }) => theme.spacings.medium}; */
    /* padding: ${({ theme }) => theme.spacings.medium}; */
  }

  a {
    color: ${({ theme }) => theme.colors.primaryBlue};
    text-decoration: none;
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
