export type ProductCard = {
  id: string;
  title: string;
  img: ImageProduct;
  currentValue: number;
  previousValue: number;
};

export type ImageProduct = {
  url: string;
  alt: string;
};

export type ProductCardWithRate = {
  rate: 0 | 1 | 2 | 3 | 4 | 5;
} & ProductCard;

type Category = {
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

export type Product = {
  id: string;
  title: string;
  img: ImageProduct;
  currentValue: number;
  previousValue: number;
  description: string;
  colors: string[];
  size: string[];
  sku: string;
  stockQuantity: number;
  rating: UserRating[];
  averageRating: number;
};

type UserRating = {
  user_id: string;
  comment: string;
};
