import { Response } from 'miragejs';
import { ServerProps } from '../types-mirage';

function routes(this: ServerProps) {
  this.namespace = 'api';
  this.timing = 750;

  this.get('/products/:category', function (schema, request) {
    const { page = 1, per_page = 10 } = request.queryParams;
    const { category } = request.params;
    const pageStart = (Number(page) - 1) * Number(per_page);
    const pageEnd = Number(pageStart) + Number(per_page);
    console.log('category', category);

    const schemaProductWithCategory = schema
      .all('product')
      .filter((product) => product.category?.name === category);
    const totalProduct = schemaProductWithCategory.length;

    const products = schemaProductWithCategory.models.slice(pageStart, pageEnd);

    return new Response(
      200,
      {},
      { 'total-products-count': String(totalProduct), products },
    );
  });

  this.get('/products', function (schema, request) {
    const { page = 1, per_page = 10 } = request.queryParams;
    const pageStart = (Number(page) - 1) * Number(per_page);
    const pageEnd = Number(pageStart) + Number(per_page);

    console.log('my schema', schema.all('product'));
    const schemaProduct = schema.all('product');
    const totalProduct = schemaProduct.length;
    const products = schemaProduct.models.slice(pageStart, pageEnd);

    // console.log('aaaproducts', products);
    // const teste = products.map((product) => {
    //   console.log('aproduct.id;', product.categoryIds[0]);
    //   const categorySchema = schema
    //     .all('category')
    //     .filter((category) => category.id === product.categoryIds[0]);

    //   return {
    //     ...product,
    //     ...categorySchema.models,
    //   };
    // });

    // console.log('meeu teste', teste);
    // const dbTeste = schema.all('product').models;
    // console.log('meu deb', dbTeste);

    return new Response(
      200,
      {},
      { 'total-products-count': String(totalProduct), products },
    );
  });

  this.get('/category', function (schema, request) {
    const { page = 1, per_page = 10 } = request.queryParams;
    const pageStart = (Number(page) - 1) * Number(per_page);
    const pageEnd = Number(pageStart) + Number(per_page);

    const schemaCategory = schema.all('category');
    const totalProduct = schemaCategory.length;
    const category = schemaCategory.models.slice(pageStart, pageEnd);

    return new Response(
      200,
      {},
      { 'total-products-count': String(totalProduct), category },
    );
  });

  this.get('/teste/:category', function (schema, request) {
    const { category } = request.params;

    const schemaTeste = schema.products.all();

    return new Response(200, {}, { schemaTeste });
  });

  this.namespace = '';

  this.passthrough();
}

export default routes;
