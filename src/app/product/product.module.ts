import { CategoryEffect } from './store/effects/category.effect';
import { categoryReducers } from './store/reducers/category.reducer';
import { Routes } from '@angular/router';
import { ProductEffect } from './store/effects/product.effect';
import { EffectsModule } from '@ngrx/effects';
import { productReducers } from './store/reducers/product.reducer';
import { StoreModule } from '@ngrx/store';
import { ProductService } from './service/product.service';
import { CategoryService } from './service/category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/product/product.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductAddDialogComponent } from './component/product-add-dialog/product-add-dialog.component';
import { ProductUpdateDialogComponent } from './component/product-update-dialog/product-update-dialog.component';

export const router: Routes = [
  {path: '', component: ProductComponent}
];

@NgModule({
  declarations: [ProductComponent, ProductItemComponent, ProductAddComponent, ProductAddDialogComponent, ProductUpdateDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('products', productReducers),
    StoreModule.forFeature('categories', categoryReducers),
    EffectsModule.forFeature([ProductEffect, CategoryEffect])
  ]
})
export class ProductModule {
  static forRoot(): ModuleWithProviders<ProductModule> {
    return {
      ngModule: ProductModule,
      providers: [
        CategoryService,
        ProductService
      ]
    };
  }
}
