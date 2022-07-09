import styled, { css } from 'styled-components';

export const Wrapper = styled.li`
  ${({ theme }) => css`
    margin: 2rem;
    border: 1px solid #000;

    li {
      margin-left: 2rem;
    }
  `}
`;
