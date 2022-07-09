import styled, { css } from 'styled-components';
import { Wrapper as WrapperGrid } from '../../components/GridProducts/styles';
import { Wrapper as WrapperCard } from '../Card/styles';
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

export const Pagination = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 4.6rem auto;
  `}
`;

type PaginationItemProps = {
  isActive?: boolean;
};

export const PaginationItem = styled.a<PaginationItemProps>`
  ${({ theme, isActive }) => css`
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 6rem;
      height: 6rem;
      font-size: 1.8rem;
      line-height: 2.2rem;
      color: ${theme.colors.blackText};
      background-color: ${isActive ? theme.colors.primaryBlue : 'transparent'};
      /
  `}
`;
