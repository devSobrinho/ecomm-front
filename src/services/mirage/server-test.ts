import { createServer, Factory, hasMany, Model, Response } from 'miragejs';
import faker from '@faker-js/faker';
import mockCategories from './mock/categories.json';
import mockSubCategories from './mock/subCategories.json';
import userMockJSON from './users.json';
import product from './factories/product';
import { newArrayToValuesNotEquals } from '@utils/newArrayToValuesNotEquals';
import brandProductMock from './mock/product/brand.json';
import { newArrayLengthRandom } from '@utils/newArrayLengthRandom';
import { numberIntegralRandom } from '@utils/numberRandom';
import { apiJsonServer } from '@services/api/api';

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
      user: Model,
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
      user: Factory.extend({
        id(i) {
          return userMockJSON[i].id;
        },
        email(i) {
          return `ID:${i}-mockUserEmail@email.com`;
        },
        name(i) {
          return userMockJSON[i].name;
        },
      }),
    },

    async seeds(server) {
      const user = server.createList('user', 2);

      const products1 = server.createList('product', 250);
      const products2 = server.createList('product', 250);

      // products1.map(async (product) => {
      //   const response = await fetch(
      //     `http://localhost:5000/products/${product.id}`,
      //   );
      //   try {
      //     const data = await response.json();

      //     if (!data.id) {
      //       await fetch('http://localhost:5000/products', {
      //         method: 'POST',
      //         headers: {
      //           'Content-Type': 'application/json; charset=utf-8',
      //         },
      //         body: JSON.stringify({
      //           ...product.attrs,
      //         }),
      //       });
      //     }
      //   } catch (error) {
      //     console.log('entra');
      //   }
      // });

      // products2.map(async (product) => {
      //   const response = await fetch(
      //     `http://localhost:5000/products/${product.id}`,
      //   );
      //   try {
      //     const data = await response.json();

      //     if (!data.id) {
      //       await fetch('http://localhost:5000/products', {
      //         method: 'POST',
      //         headers: {
      //           'Content-Type': 'application/json; charset=utf-8',
      //         },
      //         body: JSON.stringify({
      //           ...product.attrs,
      //         }),
      //       });
      //     }
      //   } catch (error) {
      //     console.log('entra');
      //   }
      // });

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
      // this.timing = 100;
      // this.urlPrefix = 'http://localhost:3000';

      // filter product
      this.get('/products', function (schema, request) {
        const { queryParams } = request;
        // let offset = 0;
        let perPage = 12;
        // let limit = 12;
        let page = 1;
        let products: any[] = [];
        let count = 0;
        const allProducts = schema.all('product').models;

        products = allProducts;

        // if (queryParams?.limit && !isNaN(Number(queryParams.limit)))
        //   limit = Number(queryParams.limit);

        if (queryParams?.Show && !isNaN(Number(queryParams?.Show))) {
          // limit = Number(queryParams.Show);
          // console.log('o novo limit', limit);
          perPage = Number(queryParams.Show);
        }

        if (queryParams?.page && !isNaN(Number(queryParams?.page)))
          page = Number(queryParams?.page);

        // if (queryParams?.offset && !isNaN(Number(queryParams.offset))) {
        //   console.log('o of', offset);

        //   offset = Number(queryParams.offset) * page;
        // }

        if (!queryParams?.category && !queryParams?.subcategory) {
          products = allProducts;
          count = allProducts.length;
        }

        // //query category ## FUNCIONA    // REVERSE***
        if (queryParams?.category && !queryParams.subcategory) {
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
        if (queryParams?.category && queryParams.subcategory) {
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

        //FILTER BRAND
        if (queryParams?.brand) {
          console.log('entrouuuuuuuuu brand');
          products = products.filter(
            (product) => product?.brand === queryParams.brand,
          );
        }

        //FILTER COLOR
        if (queryParams?.color) {
          products = products.filter((product) => {
            const filterColor = product?.colors.filter(
              (color: string) => color === queryParams.color,
            );
            console.log('o filterColor', filterColor);

            if (filterColor.length > 0) {
              return product;
            }
          });
        }

        //FILTER SORT BY
        if (queryParams?.['Sort By']) {
          if (queryParams?.['Sort By'] === 'name: asc') {
            products = products.sort((a, b) => {
              return a.name < b.name ? -1 : 1;
            });
          }
          if (queryParams?.['Sort By'] === 'name: desc') {
            products = products.sort((a, b) => {
              return a.name > b.name ? -1 : 1;
            });
          }
          if (queryParams?.['Sort By'] === 'price: asc') {
            products = products.sort((a, b) => {
              return a.currentValue < b.currentValue ? -1 : 1;
            });
          }
          if (queryParams?.['Sort By'] === 'price: desc') {
            products = products.sort((a, b) => {
              return a.currentValue > b.currentValue ? -1 : 1;
            });
          }
          if (queryParams?.['Sort By'] === 'deals: asc') {
            products = products.sort((a, b) => {
              const aDeals = a.currentValue / a.previousValue;
              const bDeals = b.currentValue / b.previousValue;
              return aDeals > bDeals ? -1 : 1;
            });
          }
          if (queryParams?.['Sort By'] === 'deals: desc') {
            products = products.sort((a, b) => {
              const aDeals = a.currentValue / a.previousValue;
              const bDeals = b.currentValue / b.previousValue;
              return aDeals < bDeals ? -1 : 1;
            });
          }
          if (queryParams?.['Sort By'] === 'order: asc') {
            products;
          }
          if (queryParams?.['Sort By'] === 'order: desc') {
            products = products.reverse();
          }
        }

        //FILTER RANGE
        if (queryParams?.range && !isNaN(Number(queryParams.range))) {
          products = products.filter(
            (product) => product.currentValue <= Number(queryParams.range),
          );
        }

        //FILTER SIZE
        if (queryParams?.size) {
          products = products.filter(
            (product) => product.size === queryParams.size,
          );
        }

        count = products.length;

        // offset = limit * page;
        // limit = offset + limit;
        // console.log('final limit e offset', limit, 'o', offset);
        const pageStart = (Number(page) - 1) * Number(perPage);
        const pageEnd = Number(pageStart) + Number(perPage);
        return new Response(
          200,
          {},
          {
            // products: products.slice(offset, limit),
            products: products.slice(pageStart, pageEnd),
            count,
          },
        );
      });

      // page product
      this.get('/product/:id', function (schema, request) {
        const { params } = request;
        schema.where('product', {});

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

      // SESSIONS
      // this.post('session', function (schema, request) {

      // });

      // json-server router user
      this.passthrough('http://localhost:5000/***');

      this.get('users/:id');
      this.get('users');
      this.post('users', async function (schema, request) {
        const { requestBody } = request;
        const { name, email } = JSON.parse(requestBody);
        try {
          // axios nao retorna a resposta no miragejs
          // const response = await apiJsonServer.post(
          //   '/login',
          //   JSON.parse(requestBody),
          // );
          const responseFetch = await fetch('http://localhost:5000/log2in', {
            method: 'post',
            body: requestBody,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
          });
          const data = await responseFetch.json();

          if (data?.user) {
            const userSchema = schema.findOrCreateBy('user', {
              name,
              email,
            });
          }

          return new Response(200, {}, { response: data });
        } catch (error) {
          console.log('mirage error', error);
        }
        return new Response(200, {}, {});
      });

      this.post('/login', async function (schema, request) {
        // console.log('entrou mirage', request);
        const { requestBody } = request;

        try {
          // axios nao retorna a resposta no miragejs
          // const response = await apiJsonServer.post(
          //   '/login',
          //   JSON.parse(requestBody),
          // );
          const responseFetch = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: requestBody,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
          });
          const data = await responseFetch.json();

          return new Response(200, {}, { response: data });
        } catch (error) {
          console.log('mirage error', error);
        }
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
