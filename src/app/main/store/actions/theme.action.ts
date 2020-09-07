import { createAction, props } from '@ngrx/store';

export enum ThemeActionTypes {
  CHANGE = '[Theme] Change'
}

export const changeThemeAction = createAction(
  ThemeActionTypes.CHANGE,
  props<{dark: boolean}>()
);
