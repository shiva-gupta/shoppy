import { Constant } from './../../../main/service/utils/constant';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { EnvService } from '../../../main/service/env/env.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthActions } from '../actions';

@Injectable()
export class AuthEffect {

  login$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AuthActions.loginAction),
        tap(action => {
          this.env.storage.setItem(Constant.KEY_USER, JSON.stringify(action.user));
          this.router.navigateByUrl('');
        })
      );
  }, {dispatch: false});

  logout$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AuthActions.logoutAction),
        tap(action => {
          this.env.storage.removeItem(Constant.KEY_USER);
          this.router.navigateByUrl('');
        })
      );
  }, {dispatch: false});

  constructor(
    private actions$: Actions,
    private env: EnvService,
    private router: Router
  ) {}
}
