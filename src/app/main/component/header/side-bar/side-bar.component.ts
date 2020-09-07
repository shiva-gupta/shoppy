import { Observable } from 'rxjs';
import { AppState } from './../../../store/reducers/index';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../../auth/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  checked = false;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(fromAuth.selectors.isLoggedIn);
    this.isLoggedOut$ = this.store.select(fromAuth.selectors.isLoggedOut);
  }

  logout(): void {
    this.store.dispatch(fromAuth.AuthActions.logoutAction());

    this.changeChecked();

    this.router.navigateByUrl('');
  }

  changeChecked(): void {
    this.checked = !this.checked;
  }

}
