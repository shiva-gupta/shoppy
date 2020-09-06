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
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const user: User = {email: 'shiva@gmail.com', password: 'passwor'};
    this.authService.login(user).subscribe(
      (res: AuthResponse) => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    );
  }

}
