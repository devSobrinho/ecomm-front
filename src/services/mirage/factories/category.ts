// import faker from '@faker-js/faker';
import { Factory } from 'miragejs';

// import { CategoryData } from '@services/types/product-types';
// import { numberIntegralRandom } from '@utils/numberRandom';
import mockCategories from '../mock/categories.json';

const category = {
  category: Factory.extend({
    id(i) {
      return i;
      // return faker.datatype.uuid();
    },
    name(i) {
      return mockCategories[i].toLowerCase();
    },
  }),
};

export default category;

// const category = {
//   category: Factory.extend<Partial<CategoryData>>({
//     id() {
//       return faker.datatype.uuid();
//     },
//     name() {
//       const categories = [
//         'feminino',
//         'masculino',
//         'infantil',
//         'acessorios',
//         'extras',
//       ];
//       const numberRandomCategory = numberIntegralRandom(categories.length, 0);
//       return categories[numberRandomCategory];
//     },
//   }),
// };
