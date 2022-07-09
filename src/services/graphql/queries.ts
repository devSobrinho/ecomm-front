import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_PRODUCTS {
    products {
      id
      name
      currentPrice
      previousPrice
      description
      slug
      stock
      cors {
        ...cor
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
    }
  }
`;
