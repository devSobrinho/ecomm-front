export * from './Pagination';
export * from './PaginationItem';

// import { PaginationItem } from './PaginationItem';
// import * as Styled from './styles';

// export type PaginationProps = {
//   totalCountOfRegisters: number;
//   registersPerPage?: number;
//   currentPage?: number;
//   onPageChange: (page: number) => void;
// };

// const siblingsCount = 1;

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// function generatePagesArray(from: number, to: number) {
//   return [...new Array(to - from)]
//     .map((_, index) => {
//       return from + index + 1;
//     })
//     .filter((page) => page > 0);
// }

// export function Pagination({
//   totalCountOfRegisters,
//   registersPerPage = 10,
//   currentPage = 1,
//   onPageChange,
// }: PaginationProps): JSX.Element {
//   const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

//   const previousPages =
//     currentPage > 1
//       ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
//       : [];

//   const nextPages =
//     currentPage < lastPage
//       ? generatePagesArray(
//           currentPage,
//           Math.min(currentPage + siblingsCount, lastPage),
//         )
//       : [];

//   return (
//     <Styled.Wrapper>
//       <div>
//         {currentPage > 1 + siblingsCount && (
//           <>
//             <PaginationItem onPageChange={onPageChange} number={1} />
//             {currentPage > 2 + siblingsCount && <p>...</p>}
//           </>
//         )}

//         {previousPages.length > 0 &&
//           previousPages.map((page) => {
//             return (
//               <PaginationItem
//                 key={page}
//                 onPageChange={onPageChange}
//                 number={page}
//               />
//             );
//           })}

//         <PaginationItem
//           onPageChange={onPageChange}
//           number={currentPage}
//           isCurrent
//         />

//         {nextPages.length > 0 &&
//           nextPages.map((page) => {
//             return (
//               <PaginationItem
//                 key={page}
//                 onPageChange={onPageChange}
//                 number={page}
//               />
//             );
//           })}

//         {currentPage + siblingsCount < lastPage && (
//           <>
//             {currentPage + siblingsCount + 1 < lastPage && <p>...</p>}
//             <PaginationItem onPageChange={onPageChange} number={lastPage} />
//           </>
//         )}
//       </div>
//     </Styled.Wrapper>
//   );
// }
