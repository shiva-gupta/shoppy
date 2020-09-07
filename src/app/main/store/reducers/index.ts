import { authReducers } from './../../../auth/store/reducers/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './../../../auth/store';

export interface AppState {
  auth: AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducers
};
