import { ProductActionTypes } from './../actions/product.action';
import { ProductService } from './../../service/product.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, catchError } from 'rxjs/operators';
import { ProductActions } from '../actions';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class ProductEffect {

  loadAll$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.loadAllAction),
        concatMap(action => this.productService.findAll()),
        map(products => {
          return ProductActions.loadAllSuccessAction({products});
        }),
        catchError(error => of(ProductActions.loadAllFailAction({error})))
      );
  });

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
