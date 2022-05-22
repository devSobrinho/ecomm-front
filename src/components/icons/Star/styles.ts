import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
    gap: 1.3rem;
  `}
`;
