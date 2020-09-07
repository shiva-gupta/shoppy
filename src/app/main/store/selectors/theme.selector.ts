import { AppState } from './../reducers/index';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getAppState = createFeatureSelector<AppState>('auth');

export const isDark = createSelector(
  getAppState,
  (state) => {
    return state.theme.dark;
  }
);
