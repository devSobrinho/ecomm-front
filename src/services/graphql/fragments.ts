import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS_PAGINATION = gql`
  fragment color on ColorSchema {
    id
    name
    color {
      hex
      rgba {
        r
        g
        b
        a
      }
    }
  }

  fragment brands on Brand {
    id
    name
  }

  fragment sizes on Size {
    id
    name
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

  fragment product on Product {
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
`;
