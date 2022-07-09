import faker from '@faker-js/faker';

import { newArrayLengthRandom } from '@utils/newArrayLengthRandom';
import { numberIntegralRandom } from '@utils/numberRandom';
import { Factory } from 'miragejs';
import brandProductMock from '../mock/product/brand.json';

const product = {
  product: Factory.extend({
    name() {
      return faker.commerce.productName();
    },
    img() {
      const url = faker.image.sports(600, 600, true);
      const alt = faker.commerce.productDescription();
      return { url, alt };
    },
    images() {
      const ArrayLengthRandom = newArrayLengthRandom(50, 1);
      const images = ArrayLengthRandom.map((_, index) => {
        return {
          idColor: index > 4 ? numberIntegralRandom(4, 1) : index,
          url: faker.image.sports(600, 600, true),
          alt: faker.commerce.productDescription(),
        };
      });
      return [...new Set(images)];
    },
    currentValue() {
      return Number(faker.commerce.price(20, 500));
    },
    previousValue(): number {
      return Number(faker.commerce.price(500, 1000));
    },
    description() {
      return faker.commerce.productDescription();
    },
    colors() {
      // const colors = ['red', 'blue', 'red'];
      const ArrayLengthRandom = newArrayLengthRandom(9, 4);
      const colors = ArrayLengthRandom.map((v) => {
        return faker.commerce.color().split(' ')[0];
      });

      return [...new Set(colors)];
    },
    size() {
      const sizeArray = ['pp', 'p', 'm', 'g', 'gg'];
      return sizeArray;
    },
    sku() {
      return faker.datatype.uuid();
    },
    stockQuantity() {
      return 10;
    },
    brand() {
      return brandProductMock[1];
    },
    rate() {
      return numberIntegralRandom(5, 0);
    },
  }),
};

export default product;

// const product = {
//   // a: Factory.extend
//   product: Factory.extend({
//     // product: Factory.extend({

//     name() {
//       return faker.commerce.productName();
//     },
//     img() {
//       const url = faker.image.imageUrl(600, 600, 'testCategory');
//       const alt = faker.commerce.productDescription();
//       return { url, alt };
//     },
//     currentValue() {
//       return Number(faker.commerce.price(500, 1000));
//     },
//     previousValue(): number {
//       // return this.currentValue() * 1.2;
//       return Number(faker.commerce.price(20, 500));
//     },
//     description() {
//       return faker.commerce.productDescription();
//     },
//     colors() {
//       const arrayColors = newArrayLengthRandom(6, 0).map((color) => {
//         return faker.commerce.color();
//       });
//       // const meFudi = new Set(arrayColors);
//       return newArrayToValuesNotEquals(arrayColors);
//     },
//     size() {
//       const sizeArray = ['pp', 'p', 'm', 'g', 'gg'];

//       return newArrayLengthRandom(5, 0).map((_, index) => sizeArray[index]);
//     },
//     sku() {
//       return faker.datatype.uuid();
//     },
//     stockQuantity() {
//       return numberIntegralRandom(30, 0);
//     },

//     // afterCreate(product, server) {
//     //   const category = server.createList('category', 11, { product });
//     //   product.update({ category });
//     // },

//     // category() {
//     //   return 'feminino';
//     // },

//     // averageRating() {
//     //   return numberIntegralRandom(5, 0);
//     // },

//     // ####### CATEGORY NÃO RELACIONAL
//     // category() {
//     //   const categories = [
//     //     'feminino',
//     //     'masculino',
//     //     'infantil',
//     //     'acessorios',
//     //     'extras',
//     //   ];
//     //   const numberRandomCategory = numberIntegralRandom(categories.length, 0);
//     //   const name = ['categorias', 'tendências', 'marcas'];
//     //   const numberRandomNameSubCategory = numberIntegralRandom(name.length, 0);
//     //   const subCategories = [
//     //     'Acessórios',
//     //     'Básicos',
//     //     'Bermudas E Shorts',
//     //     'Blazers',
//     //     'Blusas E Camisetas',
//     //     'Blusões E Suéteres',
//     //     'Bolsas',
//     //     'Calçados',
//     //     'Calças',
//     //     'Camisas',
//     //     'Casacos E Jaquetas',
//     //     'Esportivo',
//     //     'Jeans',
//     //     'Linha Maternidade',
//     //     'Macacões E Jardineiras',
//     //     'Moda Íntima',
//     //     'Moda Praia',
//     //     'Moletons',
//     //     'Óculos',
//     //     'Presentinhos',
//     //     'Saias',
//     //     'Vestidos',
//     //     'Ver Tudo',
//     //   ];

//     //   return {
//     //     id: faker.datatype.uuid(),
//     //     name: categories[numberRandomCategory],
//     //     subCategory: [
//     //       {
//     //         id: faker.datatype.uuid(),
//     //         name: name[numberRandomNameSubCategory],
//     //         subCategories,
//     //       },
//     //       {
//     //         id: faker.datatype.uuid(),
//     //         name: name[numberRandomNameSubCategory],
//     //         subCategories,
//     //       },
//     //     ],
//     //   };
//     // },
//   }),
// };
