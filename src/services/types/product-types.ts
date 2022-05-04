export type ProductCard = {
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
  name: string;
  products: ProductCardWithRate[];
};

export type Categories = {
  title: string;
  categories: Category[];
};
