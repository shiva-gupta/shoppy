import { ProductService } from './../../service/product.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { ProductActions } from '../actions';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductEffect {

  loadAll$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.loadAllAction),
        concatMap(action => this.productService.findAll()),
        map(products => {
          return ProductActions.loadAllSuccessAction({products});
        })
      );
  });

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
