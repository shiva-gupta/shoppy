import { AuthState } from './index';
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';

export const initialState: AuthState = {
  user: undefined
};

export const authReducers = createReducer(
  initialState,

  on(AuthActions.loginAction, (state, action) => {
    return {
      user: action.user
    };
  }),

  on(AuthActions.logoutAction, (state, action) => {
    return initialState;
  })
);
