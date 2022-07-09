/* eslint-disable @typescript-eslint/ban-types */
import Schema from 'miragejs/orm/schema';
import { HandlerOptions } from 'miragejs/server';
import { Registry, Server, Request, Response } from 'miragejs';
import {
  Assign,
  BelongsTo,
  FactoryDefinition,
  FlattenFactoryMethods,
  HasMany,
  ModelDefinition,
  WithFactoryMethods,
} from 'miragejs/-types';

import {
  CategoryData,
  Product,
  SubCategoryData,
} from '@services/types/product-types';
import { User } from '@services/types/shared-types';

export type IModels = {
  product: ModelDefinition<Assign<{}, ModelsExtend['product']>>;
  category: ModelDefinition<Assign<{}, ModelsExtend['category']>>;
  subCategory: ModelDefinition<Assign<{}, ModelsExtend['subCategory']>>;
  user: ModelDefinition<Assign<{}, ModelsExtend['user']>>;
};

export type IFactory = {
  products: FactoryDefinition<
    Assign<{}, FlattenFactoryMethods<Partial<Product>>>
  >;
};

export type RegistryProps = Registry<IModels, IFactory>;

export type ServerProps = Server<RegistryProps>;

export type HandlerProps = (
  schema: Schema<RegistryProps>,
  request: Request,
) => Response;

export type getRequestProps = (
  path: string,
  handler?: // | RouteHandler<Registry<AnyModels, AnyFactories>, Response>
  HandlerProps | undefined,
  options?: HandlerOptions | undefined,
) => void;

export interface ModelsExtend {
  category: Partial<CategoryData> & { subCategory: HasMany<string> };
  subCategory: Partial<SubCategoryData> & {
    product: HasMany<string>;
  };
  product: Partial<Product>;
  user: Partial<User>;
}

export type FactorysExtend = {
  product: Partial<ModelsExtend['product']>;
};
