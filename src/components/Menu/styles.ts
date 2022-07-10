import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      gap: 5rem;
    }
  `}
`;

export const Link = styled.li`
  ${({ theme }) => css`
    position: relative;
    z-index: 3;
    cursor: pointer;

    a {
      cursor: pointer;
      font-family: ${theme.font.family.primary};
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3.6rem;
      color: ${theme.colors.blackText};
      text-transform: uppercase;
    }
  `}
`;
