import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment cor on Cor {
    id
    name
  }

  fragment brands on Brand {
    id
    name
  }

  fragment sizes on Size {
    id
    value
  }

  fragment reviews on Review {
    id
    rate
    createdAt
    updatedAt
  }

  fragment imageProduct on ImageProduct {
    id
    images {
      id
      alt
      image {
        id
        url
        width
        height
      }
    }
  }
`;
