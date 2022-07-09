import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    padding: 0.5rem;
    text-transform: uppercase;
  `}
`;
