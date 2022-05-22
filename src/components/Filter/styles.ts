import { Text } from '@components/Text/styles';
import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  contentDirectionRow?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, contentDirectionRow }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    width: 27rem;
    /* background: red; */

    & > ${Text} {
      font-size: 2.2rem;
    }

    & > div {
      display: flex;
      flex-direction: ${contentDirectionRow ? 'row' : 'column'};
      gap: 1.5rem;
      flex-wrap: wrap;
    }
  `}
`;

export const OptionContainer = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    /* background: blue; */

    & ${Text} {
      font-weight: 400;
      line-height: 2.2rem;
    }
  `}
`;

type ColorOptionProps = {
  color: string;
  selectColor: boolean;
};

const selectColorFn = (
  selectColor: boolean,
  color: string,
  theme: DefaultTheme,
) => {
  if (!selectColor) return;
  return css`
    border-radius: 50%;
    border-color: ${color};
    border: 2px solid ${color + '99'};

    &::after {
      border: 1px solid ${theme.colors.gray};
    }
  `;
};

export const ColorOption = styled.span<ColorOptionProps>`
  ${({ theme, color, selectColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;

    ${selectColorFn(selectColor, color, theme)};

    &::after {
      content: '';
      width: 1.8rem;
      font-size: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      background: ${color};
    }
  `}
`;

type RangerOptionProps = {
  valueCurrent?: string;
  current?: string;
};

export const RangerOption = styled.input<RangerOptionProps>`
  ${({ theme, valueCurrent, current }) => css`
    position: relative;
    max-width: 23.6rem;
    width: 100%;
    height: 0.4rem;
    margin-top: 4.4rem;
    margin-bottom: 0.8rem;
    background: ${theme.colors.grayLight};

    font-family: ${theme.font.family.alternative};
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: ${theme.colors.blackText};
    &::before {
      content: 'Ranger:';
      position: absolute;
      bottom: 3rem;
    }
    &::after {
      content: '${current} ${valueCurrent}';
      position: absolute;
      bottom: 3rem;
      right: 0;
    }
  `}
`;

export const WrapperOrder = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
`;
export const OrderFilterProduct = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    height: 5.8rem;
    margin: 2rem;
    & span {
      font-weight: 400;
    }

    & select {
      height: 3.8rem;
      min-width: 6rem;
      font-size: 1.8rem;
      text-transform: capitalize;
      line-height: 2.7rem;
      color: ${theme.colors.blackText};
    }
  `}
`;
