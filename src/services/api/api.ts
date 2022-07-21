import {
  GRAPHQL_QUERY_ALL_INFO_PAGINATION,
  GRAPHQL_QUERY_HEADER,
  GET_SPECIFICATIONS,
} from '@services/graphql/queries';
import { IProduct } from '@services/types/product-types';
import axios from 'axios';
import request from 'graphql-request';

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
  colorName?: string;
  brandName?: string;
  sizeName?: string;
  priceRange?: number;
}

export const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API,
  baseURL: 'http://localhost:3000/api/',
});

export const apiJsonServer = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const loadAllInfoProducts = async (
  variables: ILoadProductsVariables = {},
) => {
  const orderBy = variables.orderBy;
  const priceRange = variables.priceRange ?? 999999;
  const categoryName = variables.categoryName;
  const productName = variables.productName;
  const slugProduct = variables.slugProduct;
  const subCategoryName = variables.subCategoryName;
  const colorName = variables.colorName;
  const brandName = variables.brandName;
  const sizeName = variables.sizeName;
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
    priceProductDESC,
    priceProductASC,
  } = await request(
    String(process.env.NEXT_PUBLIC_GRAPHCMS_API),
    GRAPHQL_QUERY_ALL_INFO_PAGINATION,
    {
      priceRange,
      productName,
      slugProduct,
      categoryName,
      subCategoryName,
      colorName,
      brandName,
      sizeName,
      orderBy,
      skip,
      last,
    },
  );

  const priceMaxProduct = priceProductDESC[0]?.currentPrice;
  const priceMinProduct = priceProductASC[0]?.currentPrice;
  console.log('priceMaxProduct', priceMaxProduct);

  const productsFormatted: IProduct[] = products.map(
    ({ node: product }: any) => {
      return {
        id: product.id,
        title: product.name,
        description: product.description,
        colors: product.colors,
        currentValue: product.currentPrice,
        previousValue: product.previousPrice,
        stock: product.stock,
        images: product.imagesProduct,
        reviews: product.reviews,
      };
    },
  );
  const colorsFormatted = colors.map((color: any) => {
    return {
      id: color.node.id,
      name: color.node.name,
      color: color.node.color.hex,
    };
  });

  const brandsFormatted = brands.map((brand: any) => {
    return {
      id: brand.node.id,
      name: brand.node.name,
      amount: brand.node.products.length,
    };
  });

  const sizesFormatted = sizes.map((size: any) => {
    return {
      id: size.node.id,
      name: size.node.name,
    };
  });

  return {
    priceMaxProduct,
    priceMinProduct,
    productsInfo: {
      count: countProduct,
      products: productsFormatted,
    },
    brandsInfo: { count: countBrand, brands: brandsFormatted },
    sizesInfo: { count: countSizes, sizes: sizesFormatted },
    colorsInfo: { count: countColors, colors: colorsFormatted },
  };
};

export const loadCategoriesAndSubCategories = async () => {
  const data = await request(
    String(process.env.NEXT_PUBLIC_GRAPHCMS_API),
    GRAPHQL_QUERY_HEADER,
  );
  return data.categories;
};

export const mutationAuthentication = async () => {
  const data = await request(
    String(process.env.NEXT_PUBLIC_GRAPHCMS_API),
    GRAPHQL_QUERY_HEADER,
  );
  return data.categories;
};

export const getSpecificationsProduct = async () => {
  const data = await request(
    String(process.env.NEXT_PUBLIC_GRAPHCMS_API),
    GET_SPECIFICATIONS,
  );

  return data;
};
