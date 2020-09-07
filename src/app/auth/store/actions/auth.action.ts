import { User } from './../model/user';
import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  REGISTER = '[Auth] Register',
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout'
}

export const loginAction = createAction(
  AuthActionTypes.LOGIN,
  props<{user: User}>()
);

export const logoutAction = createAction(
  AuthActionTypes.LOGOUT
);
