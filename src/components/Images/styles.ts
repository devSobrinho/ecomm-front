import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-height: 50rem;
    height: 100%;
    max-width: 80rem !important;
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
    background: ${theme.colors.gray2};
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .cardImage {
      position: relative;
      & > svg {
        margin: 0;
        z-index: 2;
        position: absolute;
        top: 0;
        right: -0.5rem;
        width: 2.5rem;
        height: 2.5rem;
        background: ${theme.colors.grayLight};
        border-radius: 50%;
        transition: 300ms all ease-in-out;
        cursor: pointer;

        &:hover {
          background: ${theme.colors.gray};
        }
      }
    }
  `}
`;
