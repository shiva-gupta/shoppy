import { Category } from './../model/category';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum CategoryActionTypes {
  LOAD_ALL = '[Category] Load All',
  LOAD_ALL_SUCCESS = '[Category] Load All Success',
  LOAD_ALL_FAIL = '[Category] Load All Fail'
}

export const loadAllAction = createAction(
  CategoryActionTypes.LOAD_ALL
);

export const loadAllSuccessAction = createAction(
  CategoryActionTypes.LOAD_ALL_SUCCESS,
  props<{categories: Category[]}>()
);

export const loadAllFailAction = createAction(
  CategoryActionTypes.LOAD_ALL_FAIL,
  props<{error: HttpErrorResponse}>()
);
