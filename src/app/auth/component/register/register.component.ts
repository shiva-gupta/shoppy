import { AuthState } from './../../store/reducers/index';
import { ToastrService } from './../../../main/service/shared/toastr.service';
import { User } from './../../store/model/user';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private authService: AuthService,
    private toast: ToastrService,
    private store: Store<AuthState>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    const val = this.form.value;
    const user: User = {
      name: val.name,
      email: val.email,
      password: val.password
    };

    this.authService.register(user).subscribe(
      (response: User) => {
        this.toast.success('Registered Successfully');
        this.router.navigateByUrl('login');
      },
      (err: HttpErrorResponse) => {
        this.toast.error(err.error);
      }
    );
  }

}
