import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  displaySuccess = false;
  displayError = false;
  message: string;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    // this.success('Login Successful');
    // this.error('Login Failed');
  }

  success(message: string): void {
    this.message = message;
    this.displaySuccess = true;

    setTimeout(() => {
      this.displaySuccess = false;
    }, 2000);
  }

  error(message: string): void {
    this.message = message;
    this.displayError = true;

    setTimeout(() => {
      this.displayError = false;
    }, 2000);
  }

}
