import { EnvService } from './../../main/service/env/env.service';
import { AuthResponse } from './../store/model/auth.response';
import { User } from './../store/model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) { }

  login(user: User): Observable<any> {
    return this.http.post<any>(
      `${this.env.apiUrl}/login`,
      {
        email: user.email,
        password: user.password
      }
    );
  }
}
