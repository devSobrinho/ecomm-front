import { numberIntegralRandom } from './numberRandom';

export const newArrayLengthRandom = (maxLength = 10, minLength = 0) => {
  const arrayLength = numberIntegralRandom(maxLength, minLength);
  return Array.from(Array(arrayLength).keys());
};
