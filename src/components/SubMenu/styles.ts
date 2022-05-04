import styled, { css } from 'styled-components';

export const List = styled.ul`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 5rem;
  `}
`;

export const GridSubCategory = styled.li<{ categoriesLength: number }>`
  ${({ theme, categoriesLength }) => css`
    padding: 5rem auto;

    & h3 {
      margin-bottom: 2rem;
    }

    & nav {
      display: grid;
      grid-template-columns: ${categoriesLength >= 6 ? '1fr 1fr' : '1fr'};
      column-gap: 2rem;
      row-gap: 2rem;
      width: 300px;
      & a {
        cursor: pointer;
      }
    }
  `}
`;
