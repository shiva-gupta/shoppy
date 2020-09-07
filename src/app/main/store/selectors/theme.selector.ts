import { AppState, ThemeState } from './../reducers/index';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getAppState = createFeatureSelector<ThemeState>('theme');

export const isDark = createSelector(
  getAppState,
  (state) => {
    return state.dark;
  }
);
