import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    z-index: 99;
    display: flex;
    flex-direction: column;
  `}
`;

export const Account = styled.div`
  ${({ theme }) => css`
    z-index: 99;
    display: flex;
    flex-direction: column;
  `}
`;

export const SubHeader = styled.div`
  ${({ theme }) => css`
    /* z-index: 99;s */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 10rem;
    height: 8rem;
    border-bottom: 1px solid ${theme.colors.grayLight};
  `}
`;

export const SubCategoriesOut = styled.div`
  ${({ theme }) => css`
    z-index: 2;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 200vh;
    padding-left: 50vw;
    padding-right: 50vw;
    margin: 0 auto;
    height: 800px;
  `}
`;

export const SubCategoriesHover = styled.div`
  ${({ theme }) => css`
    z-index: 99;
    position: absolute;
    top: 11rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    margin: 0 auto;
    height: 450px;
  `}
`;

export const SubCategories = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayLight};
    position: absolute;
    bottom: 0;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    /* background: red; */
    background: ${theme.colors.white};
    max-width: 80vw;
    padding: 2.7rem 8.5rem 1rem 8.5rem;
  `}
`;
