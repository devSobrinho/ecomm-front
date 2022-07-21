import styled, { css, DefaultTheme } from 'styled-components';
import { Text } from '../Text/styles';

interface FormControlProps {
  errorTimeOut?: number;
  isError: boolean;
  iconRight?: boolean;
  isIcon?: boolean;
}

const styledErrorTimeOut = (errorTimeOut: number, theme: DefaultTheme) => {
  return css`
    opacity: 0;
    animation: errorTimeOutAnimation ${errorTimeOut + 'ms'};
    width: 500px;
    color: ${theme.colors.primaryRed};

    @keyframes errorTimeOutAnimation {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }
  `;
};

export const FormControl = styled.div<FormControlProps>`
  ${({ theme, errorTimeOut, isError, isIcon, iconRight }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 34.3rem;
    height: 4.8rem;

    & input[type='text'],
    input[type='number'],
    .inputFile,
    input[type='password'] {
      padding: 1.3rem 1.6rem;
      ${isIcon && 'padding-left: 5rem'};
      font-family: ${theme.font.family.secondary};
      font-size: 1.4rem;
      line-height: 2.2rem;
      letter-spacing: 0.5px;
      color: ${theme.colors.gray2};
      border: 1px solid #ebf0ff;
      border-radius: 5px;

      ${isError
        ? `
      border-color: ${theme.colors.primaryRed};`
        : null}
    }

    & input[type='file'] {
      display: none;
    }
    .inputFile {
      /* background: red; */
      padding: 1rem;
      background: ${theme.colors.neutralDark};
      max-width: 20rem;
      text-align: center;
      font-weight: 600;
      color: ${theme.colors.white};
    }

    & label {
      text-transform: capitalize;
      cursor: pointer;
    }

    & ${Text} span {
      position: absolute;
      bottom: -1.8rem;

      ${errorTimeOut && styledErrorTimeOut(errorTimeOut, theme)}
    }

    & svg {
      position: absolute;
      width: 2.4rem;
      margin-left: 1.6rem;
      right: ${iconRight ? 0 : null};
      top: 50%;
      transform: translateY(-50%);
      margin-right: 1rem;
      fill: ${theme.colors.primaryRed};

      & path {
        ${isError
          ? `
      fill: ${theme.colors.primaryRed};`
          : null}

        &:focus {
          fill: ${theme.colors.primaryBlue};
        }
      }

      &:focus {
        color: red;
      }
    }
  `}
`;

export const InputSubmit = styled.input`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primaryBlue};
    box-shadow: 0px 10px 30px rgba(64, 191, 255, 0.24);
    border-radius: 5px;
    max-width: 34.3rem;
    height: 5.7rem;
    padding: 1.6rem;
    font-family: ${theme.font.family.primary};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
    text-align: center;
    letter-spacing: 0.5px;
    color: ${theme.colors.white};
    transition: filter 400ms ease-in-out;
    &:hover {
      filter: brightness(0.8);
    }
  `}
`;

type StylesOptions = 'default' | 'primary' | 'secondary' | 'alternative';

interface InputButtonProps {
  styles: StylesOptions;
  backgroundColor?: string;
  color?: 'primaryBlue' | 'primaryRed' | 'white' | 'blackText' | 'gray2';
  iconColor?: 'primaryBlue' | 'primaryRed' | 'white' | 'blackText';
  isCapitalize?: boolean;
  isLowercase?: boolean;
  isUppercase?: boolean;
  isText?: boolean;
}

const styledInputButton = (
  theme: DefaultTheme,
  styles: StylesOptions,
  color?: string,
  backgroundColor?: string,
) => {
  switch (styles) {
    case 'primary': {
      return css`
        font-weight: 500;

        font-size: 1.6rem;
        background-color: ${backgroundColor};
      `;
    }
    case 'secondary': {
      return css`
        font-weight: 700;
        color: ${color ?? theme.colors.gray2};

        & > input {
          max-width: 27.7rem;
          width: 100%;
        }
      `;
    }
    case 'alternative': {
      return css`
        background: ${theme.colors.primaryBlue};
        box-shadow: 0px 10px 30px rgba(64, 191, 255, 0.24);
      `;
    }
    default: {
      return css``;
    }
  }
};

export const InputButton = styled.div<InputButtonProps>`
  ${({
    theme,
    isCapitalize,
    isLowercase,
    isUppercase,
    color,
    backgroundColor,
    styles,
    isText,
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${isText ? '1.6rem' : 'none'};
    border-radius: 5px;
    max-width: ${isText ? '34.3rem' : 'none'};
    width: ${isText ? '100%' : '5.7rem'};
    height: 5.7rem;
    padding: ${isText ? '1.6rem' : 'none'};
    transition: filter 400ms ease-in-out;
    border: 1px solid #ebf0ff;
    border-radius: 5px;
    background: ${backgroundColor ?? 'transparent'};
    font-family: ${theme.font.family.primary};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
    text-align: center;
    text-transform: ${(isCapitalize && 'capitalize') ||
    (isLowercase && 'lowercase') ||
    (isUppercase && 'uppercase')};
    letter-spacing: 0.5px;
    color: ${color ? theme.colors[color] : theme.colors.blackText};
    cursor: pointer;
    filter: drop-shadow(0px 10px 30px rgba(64, 191, 255, 0.24));

    &:hover {
      filter: brightness(0.8);
    }

    & > svg {
      fill: red;
    }

    ${styledInputButton(theme, styles, color, backgroundColor)};
  `}
`;

export const InputWithButton = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 36.7rem;
    height: 5.8rem;
    border: 2px solid #f1f3f4;
    border-radius: 5px;
    font-family: ${theme.font.family.primary};

    & > input {
      width: 100%;
      height: 100%;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: ${theme.colors.blackText};
      text-transform: initial;
      padding: 0 2rem;
    }
    & button {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      border-radius: 5px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      background-color: ${theme.colors.primaryBlue};
      color: ${theme.colors.white};
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 2.7rem;
      padding: 0 2.1rem;
      text-transform: capitalize;
      transition: filter 300ms ease-in-out;

      &:hover {
        filter: brightness(0.7);
      }
    }
  `}
`;
