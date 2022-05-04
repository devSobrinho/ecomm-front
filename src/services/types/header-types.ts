export type IHeader = {
  language: string[];
  profile: string;
  card: string;
  logo: {
    url?: string;
    text: string;
    alt?: string;
  };
  menu: IMenu[];
};

export type IMenu = {
  id: string;
  name: string;
  categories: {
    title: string;
    subCategories: string[];
  }[];
};
