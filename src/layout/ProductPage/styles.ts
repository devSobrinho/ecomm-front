import styled, { css } from 'styled-components';
import { Text } from '../../components/Text/styles';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    word-wrap: break-word;

    & hr {
      border: none;
      border-bottom: 1px solid ${theme.colors.grayLight2};
      width: 100%;
    }

    .flex {
      flex-direction: row;
      gap: 7rem;
      width: 100%;
    }

    select {
      margin-left: 10.5rem;
    }

    & > .card-image .card-hover {
      & > div {
        color: #33a0ff;
        background: #33a0ff44;
      }
    }

    & > .card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
      width: 100%;

      > a {
        width: 100%;

        & > ${Text} {
          word-wrap: break-word !important;
          text-align: start;
        }
      }

      .details {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;
        div {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7rem;
          max-width: 30rem;
          width: 100%;

          justify-content: space-between;
        }
      }

      select {
        text-transform: uppercase;
        /* margin-left: 10rem; */
      }

      & > ${Text} {
        margin-top: 1rem;
      }

      .buttonsWrapper {
        display: flex;
        align-items: center;
      }

      .card-buttons {
        width: 100%;
        display: flex;
        justify-content: end;
        gap: 1.7rem;
        margin: 2.5rem 0;
        & > .buttonCartRemove,
        & > .buttonCartAdd {
          max-width: 23rem;
          background: #33a0ff44;
          color: #33a0ff;
        }

        > &:last-child {
          width: 5.7rem;
        }

        .buttonCartRemove {
          font-weight: 600;
          background: ${theme.colors.gray};
          color: ${theme.colors.white};
        }
      }
      .buttonsShared {
        display: flex;
        margin: 1rem 0;
        gap: 1rem;
        & > div {
          max-width: 30rem;
          color: ${theme.colors.white};
        }
        .buttonShared__facebook {
          background: #385c8e;
          svg path {
            fill: ${theme.colors.white};
          }
        }

        .buttonShared__twitter {
          background: #03a9f4;
        }
      }
    }
  `}
`;
