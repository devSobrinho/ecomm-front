import { Model, hasMany } from 'miragejs';
import { ModelsExtend } from '../types-mirage';

const models = {
  category: Model.extend<ModelsExtend['category']>({
    subCategory: hasMany(),
  }),
  subCategory: Model.extend<ModelsExtend['subCategory']>({
    product: hasMany(),
  }),
  product: Model.extend<ModelsExtend['product']>({}),
  user: Model.extend<ModelsExtend['user']>({}),
};

export default models;

// product1: Model.extend<ModelsExtend['product']>({
//   subCategory: hasMany(),
// }),
// category1: Model.extend<ModelsExtend['category']>({
//   subCategory: hasMany(),
// }),
// subCategory1: Model.extend<ModelsExtend['subCategory']>({
//   product: hasMany(),
//   category: belongsTo(),
// }),
