import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 10rem auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(4, 300px);
    row-gap: 5rem;
    column-gap: 3rem;
  `}
`;
