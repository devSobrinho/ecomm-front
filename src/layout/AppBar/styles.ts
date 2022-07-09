import styled, { css } from 'styled-components';
import { Form as FormComponent } from '../../components/Form/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    padding: 0 10rem;

    & > .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3.5rem;

      & > .wrapper__content {
        display: flex;
        justify-content: center;

        & > a,
        & > button {
          display: flex;
          justify-content: center;
        }

        & svg {
          margin-right: 1rem;
          width: 2rem;
          height: 2rem;
        }
      }

      & ${FormComponent} {
        position: relative;

        & input {
          padding: 0.5rem;
          padding-right: 3.2rem;
          max-width: 15rem;
        }

        & > svg {
          width: 1.5rem;
          opacity: 0.5;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          position: absolute;
          margin-right: 1rem;
        }
      }
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    position: relative;

    & > input {
      padding: 0.5rem;
      padding-right: 3.2rem;
      max-width: 15rem;
    }
    & > svg {
      width: 1.5rem;
      opacity: 0.5;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      margin-right: 1rem;
    }
  `}
`;
