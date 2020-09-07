import { User } from './../model/user';

export interface AuthState {
  user: User;
}

export * from './auth.reducer';
