import faker from '@faker-js/faker';

import db from '../../db.json';

export const seedDB = () => {
  for (let index = 0; index < 30; index++) {
    const getPrice = () => {
      return Number(faker.commerce.price(10, 800));
    };

    db.products.push({
      id: `${db.products.length}`,
      name: faker.commerce.productName(),
      price: getPrice(),
      categorie_name: faker.commerce.department(),
      color: [],
      parcelamento: [3, getPrice() / 3],
      image: faker.image.fashion(800, 800, true),
      size: ['p', 'pp', 'G', 'GG'],
      date: `${new Date()}`,
    });
  }
};
