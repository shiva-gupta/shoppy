import { categoryAdapter } from './../reducers/category.reducer';
import { ProductState } from './../reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const categoryBasicSelectors = categoryAdapter.getSelectors();

export const getCategoryState = createFeatureSelector<ProductState>('categories');

export const getAllCategories = createSelector(
  getCategoryState,
  categoryBasicSelectors.selectAll
);

export const getLoading = createSelector(
  getCategoryState,
  (state) => state.loading
);

export const getLoaded = createSelector(
  getCategoryState,
  (state) => state.loaded
);
