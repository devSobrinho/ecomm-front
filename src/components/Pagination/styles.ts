import styled, { css } from 'styled-components';

// export const Wrapper = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     gap: 2rem;

//     & > div {
//       display: flex;
//       gap: 2rem;

//       & p > {
//         text-align: center;
//         width: 1rem;
//       }
//     }
//   `}
// `;

// export const PaginationButton = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     gap: 2rem;

//     & > div {
//       display: flex;
//       gap: 2rem;

//       & p > {
//         text-align: center;
//         width: 1rem;
//       }
//     }
//   `}
// `;

export const Pagination = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 4.6rem auto;
  `}
`;

type PaginationButtonProps = {
  isActive?: boolean;
};

export const PaginationButton = styled.a<PaginationButtonProps>`
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
