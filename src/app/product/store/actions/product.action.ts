import { Product } from './../model/product';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum ProductActionTypes {
  LOAD_ALL = '[Product] Load All',
  LOAD_ALL_SUCCESS = '[Product] Load All Success',
  LOAD_ALL_FAIL = '[Product] Load All Fail'
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
