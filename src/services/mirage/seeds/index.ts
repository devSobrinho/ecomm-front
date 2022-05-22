import { ServerProps } from '../types-mirage';

const productsSeeder = (server: ServerProps) => {
  server.createList('product', 50, {
    // category: server.createList('category', 1),
    // prod_category: server.createList('category', 1),
  });
  // server.create('products', {});
};

const categoriesSeeder = (server: ServerProps) => {
  server.createList('category', 3, {
    // product: server.createList('product', 10),
  });
};

export default function seeds(server: ServerProps) {
  productsSeeder(server);
  categoriesSeeder(server);
}
