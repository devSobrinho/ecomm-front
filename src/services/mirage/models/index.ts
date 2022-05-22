import { belongsTo, Model, hasMany } from 'miragejs';
import { ModelsExtend } from '../types-mirage';

const models = {
  product: Model.extend<ModelsExtend['product']>({
    subCategory: hasMany(),
  }),
  category: Model.extend<ModelsExtend['category']>({
    subCategory: hasMany(),
  }),
  subCategory: Model.extend<ModelsExtend['subCategory']>({
    product: hasMany(),
    category: belongsTo(),
  }),
};

export default models;
