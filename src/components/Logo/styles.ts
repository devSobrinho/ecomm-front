import styled, { css } from 'styled-components';

export const LogoLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;

    cursor: pointer;
    & h2 {
      padding-left: 0.6rem;
    }
    & img {
      width: 44px !important;
      height: 44px !important;
    }
  `}
`;
