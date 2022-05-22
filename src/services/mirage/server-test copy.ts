import {
  belongsTo,
  createServer,
  Factory,
  hasMany,
  Model,
  Response,
} from 'miragejs';
import faker from '@faker-js/faker';
import product from './factories/product';
import { newArrayToValuesNotEquals } from '@utils/newArrayToValuesNotEquals';
import mockCategories from './mock/categories.json';
import mockSubCategories from './mock/subCategories.json';

export function makeServer() {
  const server = createServer({
    models: {
      product: Model.extend({
        subCategory: hasMany(),
      }),
      category: Model.extend({
        subCategory: hasMany(),
      }),
      subCategory: Model.extend({
        product: hasMany(),
        category: belongsTo(),
      }),
    },

    factories: {
      subCategory: Factory.extend({
        id() {
          return faker.datatype.uuid();
        },
        name(i) {
          return mockSubCategories[i].toLowerCase();
        },
      }),

      category: Factory.extend({
        id() {
          return faker.datatype.uuid();
        },
        name(i) {
          return mockCategories[i].toLowerCase();
        },
      }),

      product: Factory.extend({
        name() {
          return faker.commerce.productName();
        },
        img() {
          const url = faker.image.imageUrl(600, 600, 'testCategory');
          const alt = faker.commerce.productDescription();
          return { url, alt };
        },
        currentValue() {
          return Number(faker.commerce.price(500, 1000));
        },
        previousValue(): number {
          return Number(faker.commerce.price(20, 500));
        },
        description() {
          return faker.commerce.productDescription();
        },
        colors() {
          return [
            faker.commerce.color(),
            faker.commerce.color(),
            faker.commerce.color(),
          ];
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
      }),
    },

    seeds(server) {
      const categoryFeminino = server.createList('category', 1, {
        name: 'feminino',
      });

      const prod = server.createList('product', 3, {
        // pegar algumas subcategorias criadas
        // subCategory: subCategoryBolsas,

        subCategory: server.createList('subCategory', 1, {
          name: 'bolsas',
          category: categoryFeminino,
          // product: prod,
        }),
      });

      // usar outras subcategorias para produtos diferentes
      // const prod = server.createList('product', 10, {
      //   subCategory,
      // });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 100;

      this.get(
        '/products',
        // , function (schema, request) {
        //   return new Response(200, {}, {});
        // }
      );

      this.get('/products/:category/:subcategory', function (schema, request) {
        const {
          params: { category, subcategory },
          queryParams,
        } = request;
        const where = schema.where('subCategory', {
          category,
          // name: subcategory,
        });

        console.log('catregory', category);

        console.log('tersteq', where);

        return new Response(200, {}, {});
      });

      this.get('/subCategories/:name', function (schema, request) {
        const {
          params: { name },
        } = request;

        // const shemaSubCategory = schema.all('subCategory').models;
        const whereSubCategory = schema.where('subCategory', { name }).models;
        const productsWithSubCategoryWith = whereSubCategory[0].product.models;

        console.log('productsWithSubCategoryWith', productsWithSubCategoryWith);

        // find one -> schema.where('product', { id: '1' })
        // console.log('schema.db', schema.where('product', { id: '1' }));

        return new Response(
          200,
          {},
          { products: productsWithSubCategoryWith, 'total-product': 90 },
        );
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
