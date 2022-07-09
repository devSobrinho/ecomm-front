import { createServer } from 'miragejs';
import models from './models';
import factories from './factories';
import seeds from './seeds';
import routes from './routes';

import { ServerProps } from './types-mirage';

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

  return server;
}
