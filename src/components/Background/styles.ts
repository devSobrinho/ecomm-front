import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background-image: url('/assets/images/background-sky-violet.png');
    background-size: cover;

    /* div {


      max-height: 100%;
      width: 100%;
      height: 100vh;
      background-image: url('/assets/images/nuvens.png');
      background-size: cover;
      background-repeat: repeat;
      animation: clouds 1s infinite;

      
    } */
    filter: contrast(150%);
    /* animation: filter-cloud 60s infinite ease-in-out;

    @keyframes filter-cloud {
      0% {
        filter: grayscale(0%);
      }
      50% {
        filter: grayscale(60%);
      }
      100% {
        filter: grayscale(0%);
      }
    } */

    img {
      position: absolute;
      top: -85px;
      left: 0;
      height: 100%;
      animation: clouds 60s infinite ease-in-out;
      padding-right: 100px;
      /* background-repeat: repeat-x; */

      @keyframes clouds {
        0% {
          left: 0px;
        }
        50% {
          left: -3200px;
        }
        100% {
          left: 0px;
        }
      }
    }
  `}
`;
