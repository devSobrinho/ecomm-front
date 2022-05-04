import faker from '@faker-js/faker';
import { numberIntegralRandom } from '@utils/numberRandom';

export const fakerColors = () => {
  const numberRandom = numberIntegralRandom(8, 1);
  const array = new Array(numberRandom);
  const newArray = array.map(() => {
    return `${faker.commerce.color}`;
  });
  // const arrayColors = newArray.filter(color => color)

  return newArray;
};
