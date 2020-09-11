import { Product } from './../../store/model/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from './../../store/model/category';
import { AppState } from './../../../main/store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromAuth from '../../../auth/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  display = false;
  isLoggedIn$: Observable<boolean>;

  // dialog
  categories$: Observable<Category[]>;
  form: FormGroup = new FormGroup({
    title: new FormControl('Apple iPhone 11 Pro', [Validators.required]),
    description: new FormControl('4 GB Ram, 512 GB Rom', [Validators.required]),
    images: new FormControl('https://www.gizbot.com/images/2019-09/apple-iphone-11-pro-max_1568195590120.jpg', [Validators.required])
  });
  categoryId = '';

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(fromAuth.selectors.isLoggedIn);

    // dialog
    this.store.dispatch(fromStore.CategoryActions.loadAllAction());
    this.categories$ = this.store.select(fromStore.categorySelectors.getAllCategories);
  }

  handleModal(): void {
    this.display = !this.display;
  }

  // dialog
  add(): void {
    const product: Product = {
      title: this.form.value.title,
      description: this.form.value.description,
      images: [this.form.value.images],
      categoryId: Number(this.categoryId)
    };

    this.store.dispatch(fromStore.ProductActions.saveAction({product}));


    this.handleModal();
  }

}
