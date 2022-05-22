import { belongsTo, createServer, Factory, hasMany, Model } from 'miragejs';
import models from './models';
import factories from './factories';
import seeds from './seeds';
import routes from './routes';

import { ServerProps } from './types-mirage';
import { Product } from '@services/types/product-types';
import { BelongsTo } from 'miragejs/-types';
import faker from '@faker-js/faker';

const config = (environment = 'development') => {
  const config = {
    environment,
    factories,
    models,
    routes,
    seeds,
  };

  return config;
};

export default function makeServer({ environment = 'development' }) {
  const server: ServerProps = createServer(config(environment));
  // const server = createServer({
  //   models: {
  //     user: Model.extend({
  //       messages: hasMany(),
  //     }),
  //     messages: Model.extend({
  //       user: belongsTo(),
  //     }),
  //     product: Model,
  //   },
  //   factories: {
  //     message: Factory.extend({
  //       content() {
  //         return faker.fake('{{lorem.paragraph}}');
  //       },
  //       date() {
  //         const date = new Date(faker.fake('{{date.past}}'));
  //         return date.toLocaleDateString();
  //       },
  //     }),
  //     user: Factory.extend({
  //       name() {
  //         return faker.fake('{{name.findName}}');
  //       },
  //       mobile() {
  //         return faker.fake('{{phone.phoneNumber}}');
  //       },
  //       // afterCreate(user, server) {
  //       //   const messages = server.createList('message', 2, {
  //       //     user,
  //       //   });

  //       //   user.update({ messages });
  //       // },
  //     }),
  //   },
  //   seeds() {
  //     server.createList('user', 1);
  //   },
  //   routes() {
  //     this.namespace = 'api';

  //     // this.resource('users');
  //     // this.resource('products');

  //     // this.get('messages', (schema, request) => {
  //     //   const {
  //     //     queryParams: { userId },
  //     //   } = request;

  //     //   return schema.messages.where({ userId });
  //     // });
  //   },
  // });
  return server;
}

// #######exemplo
// {
//   models: {
//     product: Model.extend<Partial<Product>>({
//       id: 'a',
//     }),
//   },
//   factories: {
//     product: Factory.extend<Partial<Product>>({}),
//     user: Factory.extend<Partial<Product>>({}),
//   },
//   routes() {
//     this.get('/user');
//   },
// }
