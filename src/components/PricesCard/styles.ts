import styled, { css } from 'styled-components';

type WrapperProps = {
  isCardList?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isCardList }) => css`
    position: relative;
    width: 100%;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: ${isCardList ? 'start' : 'center'};
    gap: 1rem;
    font-family: ${theme.font.family.primary};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 3.2rem;
    color: #40bfff;

    .price-discount2 {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.1rem;
      color: ${theme.colors.gray};
      & > span {
        text-decoration: line-through;
      }
    }
    .discountPrice2 {
      margin-left: 0.8rem;
      font-weight: 700;
      text-decoration-line: none !important;
      color: ${theme.colors.primaryRed};
    }
  `}
`;
