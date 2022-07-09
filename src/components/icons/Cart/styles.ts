import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ amount?: number }>`
  ${({ theme, amount }) => css`
    position: relative;
    max-height: 1.7rem;
    /* margin-right: 0.5rem; */
    .amount {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -15px;
      right: -7px;
      border: 2px solid #fff;
      border-radius: 50%;
      font-size: ${amount && amount >= 100 ? '1.3rem' : '1.5rem'};
      font-weight: 700;
      line-height: 1.5rem;
      height: 2.5rem;
      width: 2.5rem;
      background: ${theme.colors.primaryRed};
      color: ${theme.colors.white};
    }
  `}
`;
