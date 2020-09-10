import { CategoryState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Product } from './../../store/model/product';
import { Category } from './../../store/model/category';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import * as fromStore from '../../store';

@Component({
  selector: 'app-product-update-dialog',
  templateUrl: './product-update-dialog.component.html',
  styleUrls: ['./product-update-dialog.component.scss']
})
export class ProductUpdateDialogComponent implements OnInit {

  @Input() product: Product;

  categories$: Observable<Category[]>;

  form: FormGroup;
  categoryId: string;

  constructor(
    private store: Store<CategoryState>
  ) { }

  ngOnInit(): void {
    this.categories$ = this.store.select(fromStore.categorySelectors.getAllCategories);

    this.form = new FormGroup({
      title: new FormControl(this.product.title, [Validators.required]),
      description: new FormControl(this.product.description, [Validators.required]),
      images: new FormControl(this.product.images, [Validators.required])
    });

    this.categoryId = String(this.product.categoryId);
  }

  update(): void {
    const pro: Product = {
      id: this.product.id,
      title: this.form.value.title,
      description: this.form.value.description,
      images: this.form.value.images,
      categoryId: Number(this.categoryId)
    };

    console.log(pro);
  }

}
