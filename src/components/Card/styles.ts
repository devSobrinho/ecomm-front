import styled, { css, DefaultTheme } from 'styled-components';
import { Text } from '../Text/styles';

type WrapperProps = { cardStyles: 'primary' | 'secondary' | 'alternative' };

type CardStyled = {
  theme: DefaultTheme;
} & WrapperProps;

const cardStyled = ({ theme, cardStyles }: CardStyled) => {
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

    default:
      return css``;
  }
};

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme, cardStyles }) => css`
    position: relative;
    border-radius: 0.5rem;
    transition: all 300ms ease-in-out;
    ${cardStyled({ theme, cardStyles })}

    & a {
      position: absolute;
      z-index: 2;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &:hover {
      filter: brightness(0.8);
      transform: scale(1.05);
    }
  `}
`;
