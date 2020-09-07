import { AuthResponse } from './../model/auth.response';
import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  REGISTER = '[Auth] Register',
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout'
}

export const loginAction = createAction(
  AuthActionTypes.LOGIN,
  props<{authResponse: AuthResponse}>()
);

export const logoutAction = createAction(
  AuthActionTypes.LOGOUT
);
