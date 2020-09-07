import { themeReducers } from './theme.reducer';
import { authReducers } from './../../../auth/store/reducers/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './../../../auth/store';

export interface ThemeState {
  dark: boolean;
}

export interface AppState {
  auth: AuthState;
  theme: ThemeState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducers,
  theme: themeReducers
};
