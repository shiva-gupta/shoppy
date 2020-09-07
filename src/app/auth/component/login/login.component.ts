import { JwtUtil } from './../../service/jwt.util';
import { AuthState } from './../../store';
import { ToastrService } from './../../../main/service/shared/toastr.service';
import { AuthResponse } from './../../store/model/auth.response';
import { User } from './../../store/model/user';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../store/actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('shiva@gmail.com', [Validators.required, Validators.email, Validators.minLength(8)]),
    password: new FormControl('password', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private authService: AuthService,
    private toast: ToastrService,
    private store: Store<AuthState>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.login(user).subscribe(
      (response: User) => {
        response = JwtUtil.getUser(response.accessToken);

        this.toast.success('Login Successful');
        this.store.dispatch(AuthActions.loginAction({user: response}));

        this.router.navigateByUrl('');
      },
      (err: HttpErrorResponse) => {
        this.toast.error(err.error);
      }
    );
  }

}
