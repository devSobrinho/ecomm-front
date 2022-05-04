export const DiscountPrice = (current: number, previous: number) => {
  return Math.floor((1 - current / previous) * 100);
};
