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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private authService: AuthService,
    private toast: ToastrService,
    private store: Store<AuthState>
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log('+++++');
    // const user: User = {email: 'shiva@gmail.com', password: 'password'};
    // this.authService.login(user).subscribe(
    //   (response: AuthResponse) => {
    //     this.toast.success('Login Successful');
    //     this.store.dispatch(AuthActions.loginAction({authResponse: response}));
    //   },
    //   (err: HttpErrorResponse) => {
    //     this.toast.error(err.error);
    //   }
    // );
  }

}
