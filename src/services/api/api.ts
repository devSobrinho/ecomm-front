import {
  GRAPHQL_QUERY_HEADER,
  GRAPHQL_QUERY_PAGINATION_WITH_FILTERS,
} from '@services/graphql/queries';
import axios from 'axios';
import request from 'graphql-request';

export const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API,
  baseURL: 'http://localhost:3000/api/',
});

export const apiJsonServer = axios.create({
  baseURL: 'http://localhost:5000/',
});

type OrderBy =
  | 'currentPrice_ASC'
  | 'currentPrice_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

interface ILoadProductsVariables {
  slugProduct?: string;
  productName?: string;
  orderBy?: OrderBy;
  skip?: number;
  last?: number;
  subCategoryName?: string;
  categoryName?: string;
}

// const defaultLoadProductsVariables: ILoadProductsVariables = {
//   orderBy: 'updatedAt_DESC',
//   categoryName: '',
//   productName: '',
//   slugProduct: '',
//   subCategoryName: '',
//   skip: 0,
//   last: 10,
// };

export const loadProducts = async (variables: ILoadProductsVariables = {}) => {
  const orderBy = variables.orderBy ?? 'updatedAt_DESC';
  const categoryName = variables.categoryName ?? '';
  const productName = variables.productName ?? '';
  const slugProduct = variables.slugProduct ?? '';
  const subCategoryName = variables.subCategoryName ?? '';
  const skip = variables.skip ?? 0;
  const last = variables.last ?? 12;

  const {
    productsConnection: {
      aggregate: { count: countProduct },
      edges: products,
    },
    brandsConnection: {
      aggregate: { count: countBrand },
      edges: brands,
    },
    sizesConnection: {
      aggregate: { count: countSizes },
      edges: sizes,
    },
    colorsConnection: {
      aggregate: { count: countColors },
      edges: colors,
    },
  } = await request(
    String(process.env.NEXT_PUBLIC_GRAPHCMS_API),
    GRAPHQL_QUERY_PAGINATION_WITH_FILTERS,
    {
      orderBy,
      categoryName,
      productName,
      slugProduct,
      subCategoryName,
      skip: isNaN(skip) ? 0 : skip,
      last: isNaN(last) ? 0 : last,
    },
  );

  return {
    productsInfo: { count: countProduct, products },
    brandsInfo: { count: countBrand, brands },
    sizesInfo: { count: countSizes, sizes },
    colorsInfo: { count: countColors, colors },
  };
};

export const loadCategoriesAndSubCategories = async () => {
  const data = await request(
    String(process.env.NEXT_PUBLIC_GRAPHCMS_API),
    GRAPHQL_QUERY_HEADER,
  );
  return data.categories;
};
