import { AppState } from './../../../main/store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromAuth from '../../../auth/store';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(fromAuth.selectors.isLoggedIn);
  }

}
