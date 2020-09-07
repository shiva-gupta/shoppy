import { AuthResponse } from './../model/auth.response';
import { ActionReducerMap } from '@ngrx/store';

export interface AuthState {
  authResponse: AuthResponse;
}

export * from './auth.reducer';
