import { EnvService } from './../../main/service/env/env.service';
import { Category } from './../store/model/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) { }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${this.env.apiUrl}/category`
    );
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(
      `${this.env.apiUrl}/category/${id}`
    );
  }
}
