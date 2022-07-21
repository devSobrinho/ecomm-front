import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 7rem;
    max-width: 1200px;
    width: 100%;
    background: ${theme.colors.grayLight};

    & > form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      & > div {
        width: 100%;
        max-width: 600px;
        height: auto;
        & input {
          border-color: ${theme.colors.gray} !important;
          margin: 0.5rem;
        }
      }
      & input[type='submit'] {
        margin-top: 3rem;
        width: 20rem;
        text-transform: uppercase;
      }

      .Specifications {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
      }
    }
  `}
`;
