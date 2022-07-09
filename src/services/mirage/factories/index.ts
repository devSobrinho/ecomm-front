import product from './product';
import category from './category';
import subCategory from './subCategory';
import user from './user';

export default {
  ...product,
  ...category,
  ...subCategory,
  ...user,
};
