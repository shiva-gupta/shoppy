import { Product } from './../model/product';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum ProductActionTypes {
  LOAD_ALL = '[Product] Load All',
  LOAD_ALL_SUCCESS = '[Product] Load All Success',
  LOAD_ALL_FAIL = '[Product] Load All Fail',

  SAVE = '[Product] Save',
  SAVE_SUCCESS = '[Product] Save Success',
  SAVE_FAIL = '[Product] Save Fail',

  DELETE = '[Product] Delete',
  DELETE_SUCCESS = '[Product] Delete Success',
  DELETE_FAIL = '[Product] Delete Fail',
}

export const loadAllAction = createAction(
  ProductActionTypes.LOAD_ALL
);

export const loadAllSuccessAction = createAction(
  ProductActionTypes.LOAD_ALL_SUCCESS,
  props<{products: Product[]}>()
);

export const loadAllFailAction = createAction(
  ProductActionTypes.LOAD_ALL_FAIL,
  props<{error: HttpErrorResponse}>()
);

export const saveAction = createAction(
  ProductActionTypes.SAVE,
  props<{product: Product}>()
);

export const saveSuccessAction = createAction(
  ProductActionTypes.SAVE_SUCCESS,
  props<{product: Product}>()
);

export const saveFailAction = createAction(
  ProductActionTypes.SAVE_FAIL,
  props<{error: HttpErrorResponse}>()
);

export const deleteAction = createAction(
  ProductActionTypes.DELETE,
  props<{id: number}>()
);

export const deleteSuccessAction = createAction(
  ProductActionTypes.DELETE_SUCCESS,
  props<{id: number}>()
);

export const deleteFailAction = createAction(
  ProductActionTypes.DELETE_FAIL,
  props<{error: HttpErrorResponse}>()
);
