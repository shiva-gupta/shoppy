import { Product } from './../../store/model/product';
import { ProductState } from './../../store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductActions } from '../../store/actions';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private store: Store<ProductState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadAllAction());

    this.products$ = this.store.select(fromStore.selectors.getAllProducts);
  }

}
