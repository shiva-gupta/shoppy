import { Product } from './../model/product';
import { EntityState } from '@ngrx/entity';
import { loadavg } from 'os';

export interface ProductState extends EntityState<Product> {
  loaded: boolean;
  loading: boolean;
}

export * from './product.reducer';
