import { Response } from 'miragejs';
import { ServerProps } from '../types-mirage';

function routes(this: ServerProps) {
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
}

// function routes(this: ServerProps) {
//   this.namespace = 'api';
//   this.timing = 750;

//   this.get('/products/:category', function (schema, request) {
//     const { page = 1, per_page = 10 } = request.queryParams;
//     const { category } = request.params;
//     const pageStart = (Number(page) - 1) * Number(per_page);
//     const pageEnd = Number(pageStart) + Number(per_page);
//     console.log('category', category);

//     const schemaProductWithCategory = schema
//       .all('product')
//       .filter((product) => product.category?.name === category);
//     const totalProduct = schemaProductWithCategory.length;

//     const products = schemaProductWithCategory.models.slice(pageStart, pageEnd);

//     return new Response(
//       200,
//       {},
//       { 'total-products-count': String(totalProduct), products },
//     );
//   });

//   this.get('/products', function (schema, request) {
//     const { page = 1, per_page = 10 } = request.queryParams;
//     const pageStart = (Number(page) - 1) * Number(per_page);
//     const pageEnd = Number(pageStart) + Number(per_page);

//     console.log('my schema', schema.all('product'));
//     const schemaProduct = schema.all('product');
//     const totalProduct = schemaProduct.length;
//     const products = schemaProduct.models.slice(pageStart, pageEnd);

//     // console.log('aaaproducts', products);
//     // const teste = products.map((product) => {
//     //   console.log('aproduct.id;', product.categoryIds[0]);
//     //   const categorySchema = schema
//     //     .all('category')
//     //     .filter((category) => category.id === product.categoryIds[0]);

//     //   return {
//     //     ...product,
//     //     ...categorySchema.models,
//     //   };
//     // });

//     // console.log('meeu teste', teste);
//     // const dbTeste = schema.all('product').models;
//     // console.log('meu deb', dbTeste);

//     return new Response(
//       200,
//       {},
//       { 'total-products-count': String(totalProduct), products },
//     );
//   });

//   this.get('/category', function (schema, request) {
//     const { page = 1, per_page = 10 } = request.queryParams;
//     const pageStart = (Number(page) - 1) * Number(per_page);
//     const pageEnd = Number(pageStart) + Number(per_page);

//     const schemaCategory = schema.all('category');
//     const totalProduct = schemaCategory.length;
//     const category = schemaCategory.models.slice(pageStart, pageEnd);

//     return new Response(
//       200,
//       {},
//       { 'total-products-count': String(totalProduct), category },
//     );
//   });

//   this.get('/teste/:category', function (schema, request) {
//     const { category } = request.params;

//     const schemaTeste = schema.products.all();

//     return new Response(200, {}, { schemaTeste });
//   });

//   this.namespace = '';

//   this.passthrough();
// }

export default routes;
