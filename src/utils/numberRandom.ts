export const numberIntegralRandom = (max = 1, min = 0) => {
  if (min < 0) throw new Error("parameter 'min' is greater than or equal to 0");
  if (max < 1) throw new Error("parameter 'max' is greater than or equal to 1");

  const numberRandom = Math.trunc(Math.random() * max + min);

  return numberRandom;
};
