export const newArray = (length: number) => {
  if (typeof length !== 'number') return [];
  if (isNaN(length)) return [];
  return Array.from(Array(length).keys());
};

// export const newArray = (length: number) => {
//   console.log('length', length);

//   return new Array(length).keys();
// };

// export function generatePagesArray(from: number, to: number) {
//   return [...new Array(to - from)]
//     .map((_, index) => {
//       return from + index + 1;
//     })
//     .filter((page) => page > 0);
// }
