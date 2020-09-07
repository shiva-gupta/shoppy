// import { ToastComponent } from './../../component/toast/toast.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(
    // private toastComponent: ToastComponent
  ) { }

  success(message: string): void {
    // this.toastComponent.success(message);
  }

  error(message: string): void {
    // this.toastComponent.error(message);
    alert(message);
  }
}
