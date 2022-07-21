import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS_PAGINATION } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS_PAGINATION}

  query GET_PRODUCTS(
    $orderBy: ProductOrderByInput = createdAt_DESC
    $slugProduct: String = ""
    $skip: Int = 0
    $last: Int = 10
    $productName: String = ""
    $subCategoryName: String = ""
    $categoryName: String = ""
  ) {
    productsConnection(last: $last, skip: $skip) {
      pageInfo {
        pageSize
      }
    }

    products(
      where: {
        name_contains: $productName
        slug_contains: $slugProduct
        subCategories_some: {
          name_contains: $subCategoryName
          categories_some: { name_contains: $categoryName }
        }
      }
      orderBy: $orderBy
      skip: $skip
      last: $last
    ) {
      createdAt
      id
      name
      currentPrice
      previousPrice
      description
      slug
      stock
      colors {
        ...color
      }
      brands {
        ...brands
      }
      sizes {
        ...sizes
      }
      reviews {
        ...reviews
      }
      imagesProduct {
        ...imageProduct
      }
      subCategories {
        name
        categories {
          name
        }
      }
    }
  }
`;

export const GRAPHQL_QUERY_HEADER = gql`
  query GET_ALL_CATEGORY {
    categories {
      id
      name
      subCategories {
        id
        name
      }
    }
  }
`;

export const GRAPHQL_QUERY_PAGINATION_WITH_FILTERS = gql`
  ${GRAPHQL_FRAGMENTS_PAGINATION}

  query GET_PRODUCTS_PAGINATION(
    $orderBy: ProductOrderByInput = updatedAt_DESC
    $slugProduct: String = ""
    $skip: Int = 0
    $last: Int = 12
    $productName: String = ""
    $subCategoryName: String = ""
    $categoryName: String = ""
  ) {
    productsConnection(
      where: {
        name_contains: $productName
        slug_contains: $slugProduct
        subCategories_some: {
          name_contains: $subCategoryName
          categories_some: { name_contains: $categoryName }
        }
      }
      orderBy: $orderBy
      skip: $skip
      last: $last
    ) {
      edges {
        node {
          ...product
        }
      }
      aggregate {
        count
      }
    }
  }
`;

export const GRAPHQL_QUERY_ALL_INFO_PAGINATION = gql`
  ${GRAPHQL_FRAGMENTS_PAGINATION}

  query GET_PRODUCTS_PAGINATION(
    $orderBy: ProductOrderByInput = createdAt_DESC
    $slugProduct: String = ""
    $skip: Int = 0
    $last: Int = 10
    $productName: String = ""
    $subCategoryName: String = ""
    $categoryName: String = ""
    $brandName: String = ""
    $sizeName: String = ""
    $colorName: String = ""
    $priceRange: Float = 9999999999
  ) {
    priceProductDESC: products(
      orderBy: currentPrice_DESC
      first: 1
      where: {
        name_contains: $productName
        slug_contains: $slugProduct
        colors_some: { name_contains: $colorName }
        brands_some: { name_contains: $brandName }
        sizes_some: { name_contains: $sizeName }
        subCategories_some: {
          name_contains: $subCategoryName
          categories_some: { name_contains: $categoryName }
        }
      }
    ) {
      id
      name
      currentPrice
    }

    priceProductASC: products(
      orderBy: currentPrice_ASC
      first: 1
      where: {
        name_contains: $productName
        slug_contains: $slugProduct
        colors_some: { name_contains: $colorName }
        brands_some: { name_contains: $brandName }
        sizes_some: { name_contains: $sizeName }
        subCategories_some: {
          name_contains: $subCategoryName
          categories_some: { name_contains: $categoryName }
        }
      }
    ) {
      id
      name
      currentPrice
    }

    brandsConnection(
      where: {
        products_some: {
          currentPrice_lte: $priceRange
          name_contains: $productName
          slug_contains: $slugProduct
          colors_some: { name_contains: $colorName }
          brands_some: { name_contains: $brandName }
          sizes_some: { name_contains: $sizeName }
          subCategories_some: {
            name_contains: $subCategoryName
            categories_some: { name_contains: $categoryName }
          }
        }
      }
    ) {
      aggregate {
        count
      }
      edges {
        node {
          id
          name
          products(
            where: {
              currentPrice_lte: $priceRange
              name_contains: $productName
              slug_contains: $slugProduct
              colors_some: { name_contains: $colorName }
              brands_some: { name_contains: $brandName }
              sizes_some: { name_contains: $sizeName }
              subCategories_some: {
                name_contains: $subCategoryName
                categories_some: { name_contains: $categoryName }
              }
            }
          ) {
            name
          }
        }
      }
    }

    sizesConnection(
      where: {
        products_some: {
          currentPrice_lte: $priceRange
          name_contains: $productName
          slug_contains: $slugProduct
          colors_some: { name_contains: $colorName }
          brands_some: { name_contains: $brandName }
          sizes_some: { name_contains: $sizeName }
          subCategories_some: {
            name_contains: $subCategoryName
            categories_some: { name_contains: $categoryName }
          }
        }
      }
    ) {
      aggregate {
        count
      }
      edges {
        node {
          id
          name
        }
      }
    }

    colorsConnection(
      where: {
        products_some: {
          currentPrice_lte: $priceRange
          name_contains: $productName
          slug_contains: $slugProduct
          colors_some: { name_contains: $colorName }
          brands_some: { name_contains: $brandName }
          sizes_some: { name_contains: $sizeName }
          subCategories_some: {
            name_contains: $subCategoryName
            categories_some: { name_contains: $categoryName }
          }
        }
      }
    ) {
      aggregate {
        count
      }
      edges {
        node {
          id
          name
          color {
            hex
          }
        }
      }
    }

    productsConnection(
      where: {
        currentPrice_lte: $priceRange
        name_contains: $productName
        slug_contains: $slugProduct
        colors_some: { name_contains: $colorName }
        brands_some: { name_contains: $brandName }
        sizes_some: { name_contains: $sizeName }
        subCategories_some: {
          name_contains: $subCategoryName
          categories_some: { name_contains: $categoryName }
        }
      }
      orderBy: $orderBy
      skip: $skip
      last: $last
    ) {
      edges {
        node {
          ...product
        }
      }
      aggregate {
        count
      }
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query GET_USER_BY_EMAIL($email: String) {
    user: nextUser(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`;

export const GET_SPECIFICATIONS = gql`
  query GET_SPECIFICATIONS {
    colors {
      id
      name
    }
    brands {
      id
      name
    }
    sizes {
      id
      name
    }
  }
`;
