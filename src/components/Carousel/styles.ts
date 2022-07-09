import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 37.5rem;
    height: 8.5rem;
    gap: 0.75rem;
    margin-top: 7rem;

    .button-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      width: 3rem;
      height: 3rem;

      & svg {
        transition: background 300ms ease-in-out;
        border-radius: 4px;
        &:hover {
          background: ${theme.colors.grayLight2};
        }
      }
    }
    .left {
      left: -3rem;
    }

    .right {
      right: -3rem;
    }

    .carousel-image {
      cursor: pointer;

      .image__selected {
        border: 3px solid #006cff !important;
      }
    }
  `}
`;
