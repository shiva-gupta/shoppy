import { ToastrService } from './../../../main/service/shared/toastr.service';
import { AuthResponse } from './../../store/model/auth.response';
import { User } from './../../store/model/user';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    const user: User = {email: 'shiva@gmail.com', password: 'password'};
    this.authService.login(user).subscribe(
      (res: AuthResponse) => {
        this.toast.success('Login Successful');
      },
      (err: HttpErrorResponse) => {
        this.toast.error('Login Failed');
      }
    );
  }

}
