import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
} from 'miragejs';
import faker from '@faker-js/faker';
import { Product } from '@services/types/product-types';

export default function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      product: Model.extend<Partial<Product>>({}),
    },

    factories: {
      product: Factory.extend({
        title() {
          return faker.commerce.productName();
        },
        img() {
          const url = faker.image.imageUrl(600, 600, 'testCategory');
          const alt = faker.commerce.productDescription();
          return { url, alt };
        },
        currentValue() {
          return Number(faker.commerce.price(20, 1000));
        },
        previousValue(): number {
          // return this.currentValue() * 1.2;
          return Number(faker.commerce.price(20, 1000));
        },
      }),
    },

    seeds(server) {
      server.createList('product', 50);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 100;

      this.get('/products/:id');

      this.get('/products', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const totalProduct = schema.all('product').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = Number(pageStart) + Number(per_page);

        const products = this.serialize(schema.all('product')).products.slice(
          pageStart,
          pageEnd,
        );

        return new Response(
          200,
          {
            'total-products-count': String(totalProduct),
          },
          { products },
        );
      });

      this.namespace = '';

      this.passthrough();
    },
  });

  return server;
}
