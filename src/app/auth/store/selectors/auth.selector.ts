import { AuthState } from './../reducers/index';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  getAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
  getAuthState,
  (auth) => !auth.user
);
