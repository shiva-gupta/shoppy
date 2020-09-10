import { Category } from './../model/Category';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { CategoryActions } from '../actions';

export const categoryAdapter = createEntityAdapter<Category>();

export const intitialCategoryState = categoryAdapter.getInitialState({
  loaded: false,
  loading: false
});

export const categoryReducers = createReducer(
  intitialCategoryState,

  on(
    CategoryActions.loadAllAction,
    (state, action) => {
      return {...state, loading: true};
    }
  ),

  on(
    CategoryActions.loadAllSuccessAction,
    (state, action) => categoryAdapter.setAll(
      action.categories,
      {...state, loading: false, loaded: true}
    )
  ),

  on(
    CategoryActions.loadAllFailAction,
    (state, action) => {
      return {...state, loaded: false, loading: false};
    }
  )
);
