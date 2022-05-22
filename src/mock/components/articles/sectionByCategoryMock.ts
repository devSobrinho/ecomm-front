import faker from '@faker-js/faker';
import { Categories } from '@services/types/product-types';
import {
  productsCategoryFeminine1,
  productsCategoryFeminine2,
} from '../products/productsCategoryFeminine';

export const sectionByCategoryMock: Categories = {
  title: 'Best seller',
  categories: [
    {
      id: faker.datatype.uuid(),
      name: 'All',
      products: productsCategoryFeminine1(),
    },
    {
      id: faker.datatype.uuid(),
      name: 'Bags',
      products: productsCategoryFeminine2(),
    },
    // {
    //   id: faker.datatype.uuid() + 'aaa',
    //   name: 'Bags',
    //   products: [
    //     {
    //       id: faker.datatype.uuid() + 9,
    //       title: 'Nike Air Max 270 React',
    //       currentValue: 299.43,
    //       previousValue: 534.33,
    //       rate: 5,
    //       img: {
    //         url: '/assets/images/image Product 1.png',
    //         alt: faker.commerce.productName(),
    //       },
    //     },
    //     {
    //       id: faker.datatype.uuid() + 10,
    //       title: 'Nike Air Max 270 React',
    //       currentValue: 299.43,
    //       previousValue: 534.33,
    //       rate: 4,
    //       img: {
    //         url: '/assets/images/image Product 1.png',
    //         alt: faker.commerce.productName(),
    //       },
    //     },
    //     {
    //       id: faker.datatype.uuid() + 11 ,
    //       title: 'Nike Air Max 270 React',
    //       currentValue: 299.43,
    //       previousValue: 534.33,
    //       rate: 4,
    //       img: {
    //         url: '/assets/images/image Product 1.png',
    //         alt: faker.commerce.productName(),
    //       },
    //     },
    //     {
    //       id: faker.datatype.uuid() + 12,
    //       title: 'Nike Air Max 270 React',
    //       currentValue: 299.43,
    //       previousValue: 534.33,
    //       rate: 4,
    //       img: {
    //         url: '/assets/images/image Product 1.png',
    //         alt: faker.commerce.productName(),
    //       },
    //     },
    //     {
    //       id: faker.datatype.uuid(),
    //       title: 'Nike Air Max 270 React',
    //       currentValue: 299.43,
    //       previousValue: 534.33,
    //       rate: 3,
    //       img: {
    //         url: '/assets/images/image Product 1.png',
    //         alt: faker.commerce.productName(),
    //       },
    //     },
    //     {
    //       id: faker.datatype.uuid(),
    //       title: 'Nike Air Max 270 React',
    //       currentValue: 299.43,
    //       previousValue: 534.33,
    //       rate: 2,
    //       img: {
    //         url: '/assets/images/image Product 1.png',
    //         alt: faker.commerce.productName(),
    //       },
    //     },
    //     {
    //       id: faker.datatype.uuid(),
    //       title: 'Nike Air Max 270 React',
    //       currentValue: 299.43,
    //       previousValue: 534.33,
    //       rate: 1,
    //       img: {
    //         url: '/assets/images/image Product 1.png',
    //         alt: faker.commerce.productName(),
    //       },
    //     },
    //     {
    //       id: faker.datatype.uuid(),
    //       title: 'Nike Air Max 270 React',
    //       currentValue: 299.43,
    //       previousValue: 534.33,
    //       rate: 1,
    //       img: {
    //         url: '/assets/images/image Product 1.png',
    //         alt: faker.commerce.productName(),
    //       },
    //     },
    //   ],
    // },
  ],
};
