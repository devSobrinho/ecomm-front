import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 1800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 270px minmax(1000px, 1500px);
  `}
`;

type HeaderProps = {
  isSubCategory: boolean;
};

const subCategoryStyles = () => {
  return css`
    grid-template-columns: 1fr 1fr;
    &::after {
      content: '/';
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 1.8rem;
      transform: translateX(-50%) translateY(-50%);
    }
  `;
};

export const Header = styled.header<HeaderProps>`
  ${({ theme, isSubCategory }) => css`
    position: relative;
    max-width: 1500px;
    margin: 1.5rem auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.2rem;

    & h2 {
      text-align: right;
    }

    & h3 {
      text-align: left;
      font-weight: 400;
    }

    ${isSubCategory ? subCategoryStyles() : null}
  `}
`;
