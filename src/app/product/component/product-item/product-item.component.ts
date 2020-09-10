import { AppState } from './../../../main/store/reducers/index';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../store/model/product';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../auth/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  isLoggedIn$: Observable<boolean>;
  display = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(fromAuth.selectors.isLoggedIn);
  }

  delete(): void {
    this.store.dispatch(fromStore.ProductActions.deleteAction({id: this.product.id}));
  }

  handleModal(): void {
    this.display = !this.display;
  }
}
