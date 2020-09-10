import { Category } from './../../store/model/category';
import { CategoryState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import { Product } from '../../store/model/product';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.scss']
})
export class ProductAddDialogComponent implements OnInit {

  categories$: Observable<Category[]>;

  form: FormGroup = new FormGroup({
    title: new FormControl('Apple iPhone 11 Pro', [Validators.required]),
    description: new FormControl('4 GB Ram, 512 GB Rom', [Validators.required]),
    images: new FormControl('https://www.gizbot.com/images/2019-09/apple-iphone-11-pro-max_1568195590120.jpg', [Validators.required])
  });
  categoryId = '';

  constructor(
    private store: Store<CategoryState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.CategoryActions.loadAllAction());

    this.categories$ = this.store.select(fromStore.categorySelectors.getAllCategories);
  }

  add(): void {
    const product: Product = {
      title: this.form.value.title,
      description: this.form.value.description,
      images: [this.form.value.images],
      categoryId: Number(this.categoryId)
    };

    this.store.dispatch(fromStore.ProductActions.saveAction({product}));
  }

}
