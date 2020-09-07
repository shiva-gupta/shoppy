import { Constant } from '../../service/utils/constant';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { EnvService } from '../../service/env/env.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ThemeActions } from '../actions';

@Injectable()
export class ThemeEffect {

  change$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ThemeActions.changeThemeAction),
        tap(action => {
          this.env.storage.setItem(Constant.KEY_THEME, JSON.stringify(action.dark));
          this.changeTheme(action.dark);
        })
      );
  }, {dispatch: false});

  constructor(
    private actions$: Actions,
    private env: EnvService
  ) {}

  changeTheme(isDark: boolean): void {
    if (isDark) {
      this.trans();
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      this.trans();
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  trans(): void {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 1000);
  }
}
