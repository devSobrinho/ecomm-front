import styled, { css } from 'styled-components';
import { Text } from '../../components/Text/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    > .closeModal {
      position: fixed;
      top: 60px;
      right: 60px;
      color: ${theme.colors.gray2};
      transition: color 300ms ease-in-out;
      cursor: pointer;

      &:hover {
        color: ${theme.colors.blackText};
      }
    }

    .gridList {
      display: grid;
      grid-template-columns: minmax(400px, 800px) 1fr 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin: 4rem 0;
    }

    .products {
      & > li:first-child {
        margin-top: 0;
      }
      & > li {
        margin: 7rem 0;

        > div {
          display: flex;
          align-items: center;
        }

        .contentProduct {
          & > .buttonRemoveProduct {
            margin-right: 4.7rem;
            color: ${theme.colors.primaryRed};
          }
          & img {
            border-radius: 7px;
          }
          & > ${Text} {
            margin-left: 2.8rem;
          }
        }
      }
    }

    .containerCheck {
      display: flex;
      justify-content: space-between;
      padding: 2rem 5rem;
      padding-bottom: 10rem;

      > .checkout {
        display: flex;
        flex-direction: column;
        gap: 2.3rem;
        > div {
          display: flex;
          justify-content: space-between;
          width: 37.7rem;
        }
        > .total {
          margin-top: 3rem;

          & > ${Text} {
            font-size: 3rem;
            line-height: 4.5rem;
          }
        }
      }
    }
  `}
`;
