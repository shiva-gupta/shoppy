import { createReducer, on } from '@ngrx/store';
import { ThemeState } from './index';
import { ThemeActions } from '../actions';

export const initialThemeState: ThemeState = {
  dark: undefined
};

export const themeReducers = createReducer(
  initialThemeState,

  on(ThemeActions.changeThemeAction, (state, action) => {
    return {
      ...initialThemeState,
      dark: action.dark
    };
  })
);
