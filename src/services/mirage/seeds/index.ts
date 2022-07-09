import { ServerProps } from '../types-mirage';

const seeds = (server: ServerProps) => {
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
};

export default seeds;

// const productsSeeder = (server: ServerProps) => {
//   server.createList('product', 50, {
//     // category: server.createList('category', 1),
//     // prod_category: server.createList('category', 1),
//   });
//   // server.create('products', {});
// };

// const categoriesSeeder = (server: ServerProps) => {
//   server.createList('category', 3, {
//     // product: server.createList('product', 10),
//   });
// };

// export default function seeds(server: ServerProps) {
//   productsSeeder(server);
//   categoriesSeeder(server);
// }
