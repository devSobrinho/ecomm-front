import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 5rem 0;
  `}
`;

export const ButtonMore = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 5.6rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${theme.font.family.primary};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: ${theme.colors.blackText};
    border: 1px solid ${theme.colors.gray};
    border-radius: 0.5rem;
  `}
`;
