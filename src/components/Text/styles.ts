import styled, { css, DefaultTheme } from 'styled-components';
import { TextType } from './Text';

type TextProps = {
  type: TextType;
  theme: DefaultTheme;
  isActive?: boolean;
  isUpperCase?: boolean;
  isLowerCase?: boolean;
  isCapitalize?: boolean;
};

type Status = 'danger' | 'success' | 'default';

const textStyled = ({ theme, type, isActive = false }: TextProps) => {
  switch (type) {
    case 'logo-title': {
      return css`
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.7rem;
        color: ${theme.colors.blackText};
      `;
    }
    case 'logo-link': {
      return css`
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 3.6rem;
        color: ${isActive ? theme.colors.primaryBlue : theme.colors.blackText};
      `;
    }

    case 'principal': {
      return css`
        font-weight: 700;
        font-size: 6.4rem;
        line-height: 9.6rem;
        color: ${theme.colors.white};
      `;
    }

    case 'title-card': {
      return css`
        font-weight: 700;
        font-size: 2rem;
        line-height: 3rem;
        color: ${theme.colors.neutralDark};
      `;
    }
    case 'text-card': {
      return css`
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: ${theme.colors.blackText};
      `;
    }
    case 'title-section': {
      return css`
        font-weight: 500;
        font-size: 5.5rem;
        line-height: 8.2rem;
        color: ${theme.colors.white};
      `;
    }

    case 'text-section': {
      return css`
        font-size: 2.4rem;
        line-height: 3.6rem;
        color: ${theme.colors.white};
      `;
    }
    case 'title-alternative': {
      return css`
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.7rem;
        color: ${theme.colors.blackText};
      `;
    }
    case 'text-alternative': {
      return css`
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.5rem;
        font-family: ${theme.font.family.secondary};
        color: ${theme.colors.blackText};
      `;
    }
    case 'sub-title': {
      return css`
        font-weight: 500;
        font-size: 2.2rem;
        line-height: 3.3rem;
        color: ${theme.colors.gray};
      `;
    }

    case 'error-message': {
      return css`
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.6rem;
        color: ${theme.colors.primaryRed};
      `;
    }

    default:
      return css``;
  }
};

export const Text = styled.p<TextProps>`
  ${({ theme, type, isActive, isUpperCase, isLowerCase, isCapitalize }) => css`
    font-family: ${theme.font.family.primary};
    font-style: normal;
    /* font-weight: 400; */
    ${textStyled({ theme, type, isActive })};
    ${isUpperCase ? 'text-transform: uppercase' : null};
    ${isLowerCase ? 'text-transform: lowercase' : null};
    ${isCapitalize ? 'text-transform: capitalize' : null};
    ${isActive ? `color: ${theme.colors.primaryBlue}` : null};
    /* text-transform: capitalize; */
  `}
`;
