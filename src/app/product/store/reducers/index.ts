import { Category } from './../model/category';
import { Product } from './../model/product';
import { EntityState } from '@ngrx/entity';

export interface ProductState extends EntityState<Product> {
  loaded: boolean;
  loading: boolean;
}

export interface CategoryState extends EntityState<Category> {
  loaded: boolean;
  loading: boolean;
}

export * from './product.reducer';
export * from './category.reducer';
