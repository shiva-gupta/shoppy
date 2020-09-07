import { AuthState } from './index';
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';

export const initialState: AuthState = {
  authResponse: undefined
};

export const authReducers = createReducer(
  initialState,

  on(AuthActions.loginAction, (state, action) => {
    return {
      authResponse: action.authResponse
    };
  }),

  on(AuthActions.logoutAction, (state, action) => {
    return initialState;
  })
);
