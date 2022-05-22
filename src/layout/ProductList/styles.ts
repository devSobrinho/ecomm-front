import styled, { css } from 'styled-components';
import { Wrapper as WrapperGrid } from '../../components/GridProducts/styles';
import { Wrapper as WrapperCard } from '../../components/Card/styles';
type WrapperProps = {
  isSwitchGrid: boolean;
};

const StyledList = () => {
  return css`
    grid-template-columns: 1fr;

    & > ${WrapperCard} {
      flex-direction: row;
      max-width: 100%;
      & > span {
        max-width: 30rem !important;
      }
    }
  `;
};

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, isSwitchGrid }) => css`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 0 5rem;

    & > ${WrapperGrid} {
      ${!isSwitchGrid && StyledList()};
      margin: 0 5rem;
    }
  `}
`;

export const Orders = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
  `}
`;

export const GridProducts = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
  `}
`;
