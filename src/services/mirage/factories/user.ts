// import faker from '@faker-js/faker';

import { Factory } from 'miragejs';
import userMockJSON from '../users.json';

const user = {
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
};

export default user;
