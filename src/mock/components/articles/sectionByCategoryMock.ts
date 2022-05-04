import faker from '@faker-js/faker';
import { Categories } from '@services/types/product-types';

export const sectionByCategoryMock: Categories = {
  title: 'Best seller',
  categories: [
    {
      name: 'All',
      products: [
        {
          title: 'Nike Air Max 270 React',
          currentValue: 299.43,
          previousValue: 534.33,
          rate: 5,
          img: {
            url: '/assets/images/image Product 1.png',
            alt: faker.commerce.productName(),
          },
        },
        {
          title: 'Nike Air Max 270 React',
          currentValue: 299.43,
          previousValue: 534.33,
          rate: 4,
          img: {
            url: '/assets/images/image Product 1.png',
            alt: faker.commerce.productName(),
          },
        },
        {
          title: 'Nike Air Max 270 React',
          currentValue: 299.43,
          previousValue: 534.33,
          rate: 4,
          img: {
            url: '/assets/images/image Product 1.png',
            alt: faker.commerce.productName(),
          },
        },
        {
          title: 'Nike Air Max 270 React',
          currentValue: 299.43,
          previousValue: 534.33,
          rate: 4,
          img: {
            url: '/assets/images/image Product 1.png',
            alt: faker.commerce.productName(),
          },
        },
        {
          title: 'Nike Air Max 270 React',
          currentValue: 299.43,
          previousValue: 534.33,
          rate: 3,
          img: {
            url: '/assets/images/image Product 1.png',
            alt: faker.commerce.productName(),
          },
        },
        {
          title: 'Nike Air Max 270 React',
          currentValue: 299.43,
          previousValue: 534.33,
          rate: 2,
          img: {
            url: '/assets/images/image Product 1.png',
            alt: faker.commerce.productName(),
          },
        },
        {
          title: 'Nike Air Max 270 React',
          currentValue: 299.43,
          previousValue: 534.33,
          rate: 1,
          img: {
            url: '/assets/images/image Product 1.png',
            alt: faker.commerce.productName(),
          },
        },
        {
          title: 'Nike Air Max 270 React',
          currentValue: 299.43,
          previousValue: 534.33,
          rate: 1,
          img: {
            url: '/assets/images/image Product 1.png',
            alt: faker.commerce.productName(),
          },
        },
      ],
    },
  ],
};
