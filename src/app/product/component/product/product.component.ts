import { ProductState } from './../../store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductActions } from '../../store/actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private store: Store<ProductState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadAllAction());
  }

}
