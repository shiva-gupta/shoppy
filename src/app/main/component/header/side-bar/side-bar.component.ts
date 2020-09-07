import { AppState } from './../../../store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../../auth/store';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  display = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.display = !this.display;
  }

  logout(): void {
    this.store.dispatch(fromAuth.AuthActions.logoutAction());
  }

}
