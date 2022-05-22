import faker from '@faker-js/faker';
import { Factory } from 'miragejs';

import { CategoryData } from '@services/types/product-types';
import { numberIntegralRandom } from '@utils/numberRandom';

const category = {
  category: Factory.extend<Partial<CategoryData>>({
    id() {
      return faker.datatype.uuid();
    },
    name() {
      const categories = [
        'feminino',
        'masculino',
        'infantil',
        'acessorios',
        'extras',
      ];
      const numberRandomCategory = numberIntegralRandom(categories.length, 0);
      return categories[numberRandomCategory];
    },
  }),
};

export default category;
