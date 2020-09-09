import { ProductState } from './../reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productAdapter } from './../reducers/product.reducer';

const productBasicSelectors = productAdapter.getSelectors();

export const getProductState = createFeatureSelector<ProductState>('products');

export const getAllProducts = createSelector(
  getProductState,
  productBasicSelectors.selectAll
);

export const getLoading = createSelector(
  getProductState,
  (state) => state.loading
);

export const getLoaded = createSelector(
  getProductState,
  (state) => state.loaded
);
