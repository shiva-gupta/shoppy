import { Product } from './../store/model/product';
import { EnvService } from './../../main/service/env/env.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.env.apiUrl}/products`
    );
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(
      `${this.env.apiUrl}/product/${id}`
    );
  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(
      `${this.env.apiUrl}/products`,
      {
        title: product.title,
        description: product.description,
        images: product.images,
        categoryId: product.categoryId
      }
    );
  }
}
