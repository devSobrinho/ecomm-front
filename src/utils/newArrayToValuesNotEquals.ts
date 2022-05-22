export const newArrayToValuesNotEquals = (array: string[]) => {
  array.filter((color, index) => {
    array.map((otherColor, otherIndex) => {
      if (color === otherColor && index !== otherIndex) {
        array.slice(index, 1);
        return;
      }
      return color;
    });
    // return array.indexOf(color) === index;
  });
  return array;
};
