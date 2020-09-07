import { Observable } from 'rxjs';
import { AppState } from './../../store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../auth/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(fromAuth.selectors.isLoggedIn);
    this.isLoggedOut$ = this.store.select(fromAuth.selectors.isLoggedOut);
  }

  logout(): void {
    this.store.dispatch(fromAuth.AuthActions.logoutAction());
  }

}
