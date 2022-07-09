import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: 5rem auto;
    /* height: 950px; */

    article {
      display: grid;
      grid-template-columns: 37.5rem 87.5rem;

      .card-content {
        margin-left: 5rem;
      }
    }
  `}
`;
