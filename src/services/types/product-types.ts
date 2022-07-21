export type ProductCard = {
  id: string;
  title: string;
  description: string;
  images: ImageProduct;
  currentValue: number;
  previousValue: number;
  stock: number;
};

export type ImageProduct = {
  url: string;
  alt: string;
};

export type RateProps = 0 | 1 | 2 | 3 | 4 | 5;

export type ProductCardWithRate = {
  rate?: RateProps;
  reviewsCount?: number;
} & ProductCard;

export type Size = {
  id: string;
  name: string;
};

export type Brand = {
  id: string;
  name: string;
};

export type Color = {
  id: string;
  name: string;
  color: {
    hex: string;
    rgba: {
      r: string;
      g: string;
      b: string;
      a: string;
    };
  };
};

type Images = {
  id: string;
  images: [
    {
      id: string;
      image: {
        url: string;
      };
      alt: string;
    },
  ];
};

export type IProduct = {
  colors: Color[];
  images: Images[];
  reviews: any[];
} & ProductCard;

export type Category = {
  id: string;
  name: string;
  products: ProductCardWithRate[];
};

export type Categories = {
  title: string;
  categories: Category[];
};

export type CategoryHttp = {
  id: string;
  name: string;
};

// type SubCategory = {
//   id: string;
//   name: string;
//   subCategories: string[];
// };

export type Product = {
  id: string;
  name: string;
  img: ImageProduct;
  currentValue: number;
  previousValue: number;
  description: string;
  colors: string[];
  size: string[];
  sku: string;
  stockQuantity: number;
  rating: number;
  point: number;
};

export type CategoryData = {
  id: string;
  name: string;
  // subCategoryList: SubCategoryData[];
};

export type SubCategoryData = {
  id: string;
  name: string;
  // subCategoriesList: string[];
  // products: Product[];
};

type UserRating = {
  user_id: string;
  comment: string;
};

export type ProductData = {
  brand: string;
  colors: string[];
  currentValue: number;
  description: string;
  id: string;
  img: {
    url: string;
    alt: string;
  };
  name: string;
  previousValue: number;
  rate: number;
  size: string[];
  sku: string;
  stockQuantity: number;
};
