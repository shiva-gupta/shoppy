import { Product } from './../model/product';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, Update } from '@ngrx/entity';
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
  ),

  on(
    ProductActions.saveAction,
    (state, action) => state
  ),
  on(
    ProductActions.saveSuccessAction,
    (state, action) => productAdapter.addOne(
      action.product,
      {...state}
    )
  ),
  on(
    ProductActions.saveFailAction,
    (state, action) => state
  ),

  on(
    ProductActions.updateAction,
    (state, action) => state
  ),
  on(
    ProductActions.updateSuccessAction,
    (state, action) => {
      const entities = {};
      Object.keys(state.entities).forEach(key => {
        if (Number(key) === action.product.id) {
          entities[key] = action.product;
        } else {
          entities[key] = state.entities[key];
        }
      });

      return {
        ...state,
        entities
      };
    }
  ),
  on(
    ProductActions.updateFailAction,
    (state, action) => state
  ),

  on(
    ProductActions.deleteAction,
    (state, action) => state
  ),
  on(
    ProductActions.deleteSuccessAction,
    (state, action) => productAdapter.removeOne(
      action.id,
      {...state}
    )
  ),
  on(
    ProductActions.deleteFailAction,
    (state, action) => state
  )
);
