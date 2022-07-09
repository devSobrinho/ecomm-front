import styled, { css } from 'styled-components';
import { Text } from '../../components/Text/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 34.3rem;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & > p {
      font-weight: 400;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;

      & > div > input {
        margin: 3rem 0;
      }
    }

    .orLogin {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 2.1rem;

      & ::before {
        content: '';
        margin-left: 2.3rem;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: #ebf0ff;
        width: 30%;
        height: 1px;
      }

      & ::after {
        content: '';
        margin-right: 2.3rem;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: #ebf0ff;
        width: 30%;
        height: 1px;
      }
    }

    & > div ${Text} {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 2.1rem;
      color: ${theme.colors.gray2};
    }

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      & p {
        color: ${theme.colors.blackText};
      }

      & ${Text} {
        font-size: 1.2rem;
      }
    }
  `}
`;
