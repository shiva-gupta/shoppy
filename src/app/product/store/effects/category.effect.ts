import { CategoryService } from './../../service/category.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, catchError } from 'rxjs/operators';
import { CategoryActions } from '../actions';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CategoryEffect {

  loadAll$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(CategoryActions.loadAllAction),
        concatMap(action => this.categoryService.findAll()),
        map(categories => {
          return CategoryActions.loadAllSuccessAction({categories});
        }),
        catchError(error => of(CategoryActions.loadAllFailAction({error})))
      );
  });

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}
}
