import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 1rem;

    .multiselect-custom {
      font-size: 2rem;
    }
    .multiselect-custom div {
      padding: 1rem;
    }
  `}
`;
