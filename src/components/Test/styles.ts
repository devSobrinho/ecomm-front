import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    color: white;
    background: #210044;
    font-family: ${theme.font.family.primary};
    height: 100vh;
    padding: 7rem;

    .adicionar {
      padding: 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      /* background: yellow; */
      max-width: 90rem;
      width: 100%;
      font-size: 3rem;
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      height: 100%;

      & > li {
        width: 50rem;
        /* height: 450px; */
        margin: 0 auto;
        border: 1px solid #fff;
        border-radius: 2rem;
        padding: 3rem;
        position: relative;

        & > div {
          padding: 1rem;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 2rem;
          font-size: 3rem;
        }
      }
    }
    & .button {
      text-align: center;
      background: white;
      border: 2px solid #452;
      border-radius: 1rem;
      background: white;
      width: 100%;
      max-width: 30rem;
      padding: 1rem;
      color: #210044;
      font-family: ${theme.font.family.primary};
      text-transform: uppercase;
      font-weight: 600;
      border: 3px solid #000;

      transition: filter 300ms ease-in-out;

      &:hover {
        filter: brightness(0.7);
      }
    }

    & .amount {
      display: flex;
      align-items: center;

      & .button__increment {
        margin: 1.5rem;

        transition: color 300ms ease-in-out;

        &:hover {
          color: ${theme.colors.primaryGreen};
        }
      }

      & .button__decrement {
        margin: 1.5rem;

        transition: color 300ms ease-in-out;

        &:hover {
          color: ${theme.colors.primaryRed};
        }
      }
    }
    & .button__delete {
      position: absolute;
      top: 0;
      right: 0;
      margin: 1.5rem;

      transition: color 300ms ease-in-out;

      &:hover {
        color: ${theme.colors.primaryRed};
      }
    }

    & .price__result {
      span {
        text-transform: uppercase;
        font-weight: 500;
      }
      strong {
      }
    }
  `}
`;
