import styled, { css, DefaultTheme } from 'styled-components';
import { Text } from '../../components/Text/styles';
import { Wrapper as WrapperStar } from '../../components/icons/Star/styles';

export type WrapperProps = {
  cardStyles?: 'primary' | 'secondary' | 'alternative' | 'product' | 'page';
  isProductHover?: boolean;
  isCardList?: boolean;
};

type CardStyled = {
  theme: DefaultTheme;
} & WrapperProps;

const cardStyled = ({
  theme,
  cardStyles = 'product',
  isCardList,
}: CardStyled) => {
  switch (cardStyles) {
    case 'primary': {
      return css`
        div {
          & ${Text} {
            position: absolute;
            top: 3rem;
            left: 5rem;
          }

          & strong {
            position: absolute;
            bottom: 4.1rem;
            right: 2.2rem;
            line-height: 5.4rem;
            font-size: 3rem;
            font-weight: 700;
            font-family: ${theme.font.family.alternative};
            color: ${theme.colors.primaryBlue};
          }

          & div {
            font-family: ${theme.font.family.primary};
            span {
              position: absolute;
              bottom: 5.8rem;
              left: 5.2rem;
              font-size: 1.8rem;
              line-height: 2.7rem;
              color: ${theme.colors.gray};
              text-decoration-line: line-through;
            }

            & .discountPrice {
              margin-left: 0.8rem;
              position: absolute;
              bottom: 5.8rem;
              left: 13.4rem;
              font-weight: 700;
              text-decoration-line: line-through;
              color: ${theme.colors.primaryRed};
              text-decoration-line: none;
            }
          }
        }
      `;
    }
    case 'secondary': {
      return css`
        div {
          & ${Text} {
            position: absolute;
            top: 3rem;
            left: 5rem;
            max-width: 17rem;
          }

          & strong {
            position: absolute;
            top: 2.5rem;
            right: 2.2rem;
            line-height: 5.4rem;
            font-size: 3rem;
            font-weight: 700;
            font-family: ${theme.font.family.alternative};
            color: ${theme.colors.primaryBlue};
          }

          & div {
            position: absolute;
            bottom: 1.9rem;
            left: 50%;
            transform: translateX(-50%);
            font-family: ${theme.font.family.primary};

            span {
              font-size: 1.8rem;
              line-height: 2.7rem;
              color: ${theme.colors.gray};
              text-decoration-line: line-through;
            }

            & .discountPrice {
              margin-left: 0.8rem;
              font-weight: 700;
              text-decoration-line: line-through;
              color: ${theme.colors.primaryRed};
              text-decoration-line: none;
            }
          }
        }
      `;
    }
    case 'alternative': {
      return css`
        div {
          & ${Text} {
            position: absolute;
            top: 3rem;
            left: 5rem;
            max-width: 17rem;
          }

          & strong {
            position: absolute;
            bottom: 1.4rem;
            right: 3.3rem;
            line-height: 5.4rem;
            font-size: 3rem;
            font-weight: 700;
            font-family: ${theme.font.family.alternative};
            color: ${theme.colors.primaryBlue};
          }

          & div {
            position: absolute;
            top: 10.7rem;
            left: 5.3rem;
            font-family: ${theme.font.family.primary};

            span {
              font-size: 1.8rem;
              line-height: 2.7rem;
              color: ${theme.colors.gray};
              text-decoration-line: line-through;
            }
          }
        }
      `;
    }

    case 'product': {
      return css`
        max-width: ${isCardList ? '100%' : '30rem'};
        width: 100%;
        flex-direction: ${isCardList ? 'row' : 'column'};

        & div {
          font-family: ${theme.font.family.primary};
        }

        & .card-content {
          ${isCardList &&
          css`
            justify-content: space-between;
            align-items: flex-start;
            margin: 0 2rem;
          `}

          & > .card-description {
            margin: 1rem 0;
            width: 100%;
            max-width: 100rem;
          }

          & > .card-buttons {
            display: flex;
            gap: 1.6rem;
            margin-bottom: 1rem;

            & > div {
              z-index: 20;
              padding: 1.5rem 2rem;
              display: flex;
              justify-content: center;
              align-items: center;
              font-family: ${theme.font.family.secondary};
              font-weight: 500;
              font-size: 1.8rem;
              line-height: 1.7rem;
              color: #33a0ff;
              background: #33a0ff44;

              & svg {
                width: 1.5rem;
                height: 1.5rem;
              }

              &:hover {
                filter: brightness(0.7);
              }
            }
          }
        }
        & .card-image {
          position: relative;
          max-width: 30rem;

          & > .card-hover {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            /* right: 0; */
            margin: 0 auto;
            height: 26.25rem;
            visibility: visible;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            /* background: transparent; */
            backdrop-filter: blur(4px);
            z-index: 10;

            ${!isCardList && ' width: 30rem;'}

            & > div {
              margin: 1rem;
              z-index: 10;
            }
          }
        }
      `;
    }
    case 'page': {
      return css`
        max-width: ${isCardList ? '100%' : '30rem'};
        width: 100%;
        height: ${isCardList ? '100%' : '40rem'};
        flex-direction: ${isCardList ? 'row' : 'column'};

        & div {
          font-family: ${theme.font.family.primary};
        }

        & .card-content {
          ${isCardList &&
          css`
            justify-content: space-between;
            align-items: flex-start;
            margin: 0 2rem;
          `}

          & > .card-description {
            margin: 1rem 0;
            width: 100%;
            max-width: 100rem;
          }

          & > .card-buttons {
            display: flex;
            gap: 1.6rem;
            margin-bottom: 1rem;

            & > div {
              z-index: 20;
              padding: 1.5rem 2rem;
              display: flex;
              justify-content: center;
              align-items: center;
              font-family: ${theme.font.family.secondary};
              font-weight: 500;
              font-size: 1.8rem;
              line-height: 1.7rem;
              color: #33a0ff;
              background: #33a0ff44;

              & svg {
                width: 1.5rem;
                height: 1.5rem;
              }

              &:hover {
                filter: brightness(0.7);
              }
            }
          }
        }
        & .card-image {
          position: relative;
          max-width: 30rem;

          & > .card-hover {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            /* right: 0; */
            margin: 0 auto;
            height: 26.25rem;
            visibility: visible;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            /* background: #fff; */
            z-index: 10;

            ${!isCardList && ' width: 30rem;'}
          }
        }
      `;
    }
    default:
      return css``;
  }
};

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme, cardStyles, isProductHover, isCardList }) => css`
    position: relative;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    word-wrap: break-word;
    transition: transform 500ms ease-in-out;

    &:hover {
      transform: scale(1.05);
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
      align-items: center;
      gap: 0.8rem;
      width: 100%;

      > a {
        width: 100%;

        & > ${Text} {
          word-wrap: break-word !important;
          text-align: ${isCardList ? 'start' : 'center'};
        }
      }

      & > ${Text} {
        margin-top: 1rem;
      }

      .card-buttons {
        & > div {
          max-width: 25rem;
          background: #33a0ff44;
          color: #33a0ff;
        }

        > &:last-child {
          width: 5.7rem;
        }
      }
    }

    ${cardStyled({
      theme,
      cardStyles,
      isCardList,
    })}
  `}
`;
