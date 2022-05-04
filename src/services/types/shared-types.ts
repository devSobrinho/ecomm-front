export type User = {
  id: string;
  name: string;
  email: string;
  createAt: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  parcelamento: number[];
  color: string[];
  image: string;
  size: string[];
  createAt: string;
};
