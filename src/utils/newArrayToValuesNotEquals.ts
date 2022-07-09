export const newArrayToValuesNotEquals = (array: string[]) => {
  const newArray = array.filter(
    (valueArray, index) => array.indexOf(valueArray) === index,
  );
  return newArray;
};
