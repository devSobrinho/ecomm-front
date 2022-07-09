import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    padding: 1.3rem 1.5rem;
    background: ${theme.colors.grayLight2} !important;
    border-radius: 5px;
    width: 15rem;
    max-height: 5.7rem;

    & button:first-child svg:hover {
      color: ${theme.colors.primaryRed};
    }
    & button:last-child svg:hover {
      color: ${theme.colors.primaryGreen};
    }
    & svg {
      color: ${theme.colors.primaryBlue};
    }
  `}
`;
