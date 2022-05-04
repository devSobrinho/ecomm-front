import faker from '@faker-js/faker';
import { ProductCard } from '@services/types/product-types';

export const featuredCardMock: ProductCard[] = [
  {
    title: 'FS - QUILTED MAXI CROSS BAG',
    currentValue: 299.43,
    previousValue: 534.33,
    img: {
      url: '/assets/images/image Product 1.png',
      alt: faker.commerce.productName(),
    },
  },
  {
    title: 'FS - Nike Air Max 270 React',
    currentValue: 299.43,
    previousValue: 534.33,
    img: {
      url: '/assets/images/image Product 2.png',
      alt: faker.commerce.productName(),
    },
  },
  {
    title: 'FS - Nike Air Max 270 React...',
    currentValue: 299.43,
    previousValue: 534.33,
    img: {
      url: '/assets/images/image Product 3.png',
      alt: faker.commerce.productName(),
    },
  },
];
