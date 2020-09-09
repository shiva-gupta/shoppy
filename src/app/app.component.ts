import { isDark } from './main/store/selectors/theme.selector';
import { Constant } from './main/service/utils/constant';
import { AppState } from './main/store/reducers/index';
import { EnvService } from './main/service/env/env.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromAuth from './auth/store';
import * as fromStore from './main/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web';

  constructor(
    private env: EnvService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkUser();
    this.setTheme();
  }

  checkUser(): void {
    // check if user details available in cache
    // if yes, login automatically
    const user = this.env.storage.getItem(Constant.KEY_USER);
    if (user) {
      this.store.dispatch(fromAuth.AuthActions.loginAction({user: JSON.parse(user)}));
    }
  }

  setTheme(): void {
    const theme = this.env.storage.getItem(Constant.KEY_THEME);
    if (theme) {
      if (Boolean(JSON.parse(theme))) {
        this.store.dispatch(fromStore.ThemeActions.changeThemeAction({dark: true}));
      } else {
        this.store.dispatch(fromStore.ThemeActions.changeThemeAction({dark: false}));
      }
    }
  }
}

// json-server db.json -m ./node_modules/json-server-auth
