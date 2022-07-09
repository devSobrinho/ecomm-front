// import faker from '@faker-js/faker';
import { Factory } from 'miragejs';

import mockSubCategories from '../mock/subCategories.json';

const subCategory = {
  subCategory: Factory.extend({
    id(i) {
      return i;
      // return faker.datatype.uuid();
    },
    name(i) {
      return mockSubCategories[i].toLowerCase();
    },
  }),
};

export default subCategory;
