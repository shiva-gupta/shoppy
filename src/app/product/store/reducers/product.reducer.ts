import { Product } from './../model/product';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { ProductActions } from '../actions';

export const productAdapter = createEntityAdapter<Product>();

export const intitialProductState = productAdapter.getInitialState({
  loaded: false,
  loading: false
});

export const productReducers = createReducer(
  intitialProductState,

  on(
    ProductActions.loadAllAction,
    (state, action) => {
      return {...state, loading: true};
    }
  ),

  on(
    ProductActions.loadAllSuccessAction,
    (state, action) => productAdapter.setAll(
      action.products,
      {...state, loading: false, loaded: true}
    )
  ),

  on(
    ProductActions.loadAllFailAction,
    (state, action) => {
      return {...state, loaded: false, loading: false};
    }
  )
);
