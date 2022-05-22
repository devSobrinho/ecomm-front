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
      category: Model.extend({
        subCategory: hasMany(),
      }),
      subCategory: Model.extend({
        product: hasMany(),
      }),
      product: Model.extend({}),
    },

    factories: {
      category: Factory.extend({
        id(i) {
          return i;
          // return faker.datatype.uuid();
        },
        name(i) {
          return mockCategories[i].toLowerCase();
        },
      }),

      subCategory: Factory.extend({
        id(i) {
          return i;
          // return faker.datatype.uuid();
        },
        name(i) {
          return mockSubCategories[i].toLowerCase();
        },
      }),

      product: Factory.extend({
        name() {
          return faker.commerce.productName();
        },
        img() {
          const url = faker.image.sports(600, 600, true);
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
      const products1 = server.createList('product', 50);
      const products2 = server.createList('product', 50);

      const subCategory1 = server.createList('subCategory', 3, {
        product: products1,
      });

      const subCategory2 = server.createList('subCategory', 3, {
        product: products2,
      });

      const category = server.createList('category', 1, {
        subCategory: subCategory1,
      });
      server.createList('category', 2, {
        subCategory: subCategory2,
      });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 100;

      // filter product
      this.get('/products', function (schema, request) {
        const { queryParams } = request;
        const offset = Number(queryParams?.offset);
        const limit = Number(queryParams?.limit) + Number(queryParams?.offset);
        let products = [];
        let count = 0;
        const allProducts = schema.all('product').models;

        console.log('queryParamsqueryParams', queryParams);

        const allCategory = schema.all('category').models;
        console.log('allCategory', allCategory);

        if (!queryParams?.category && !queryParams?.subcategory) {
          products = allProducts;
          count = allProducts.length;
        }

        // //query category ## FUNCIONA    // REVERSE***
        if (queryParams?.category && !queryParams?.subcategory) {
          const productsWhereCategory = schema
            .where('category', {
              name: queryParams.category,
            })
            .models[0].subCategory.models.map((subcategory) => subcategory)[0]
            .product.models;

          products = productsWhereCategory;
          count = productsWhereCategory.length;
        }

        // //query subcategory
        if (queryParams?.category && queryParams?.subcategory) {
          const productsWhereCategoryAndSubCategory = schema
            .where('category', {
              name: queryParams.category,
            })
            .models[0].subCategory.models.filter(
              (subcategory) => subcategory.name === queryParams?.subcategory,
            )[0].product.models;

          products = productsWhereCategoryAndSubCategory;
          count = productsWhereCategoryAndSubCategory.length;
        }

        return new Response(
          200,
          {},
          {
            products: products.slice(offset, limit),
            count,
          },
        );
      });

      // page product
      this.get('/product/:id', function (schema, request) {
        const { params } = request;

        const product = schema.where('product', {
          id: params.id,
        }).models[0];

        return new Response(
          200,
          {},
          {
            product: product,
          },
        );
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
