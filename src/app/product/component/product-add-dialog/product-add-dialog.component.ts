import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.scss']
})
export class ProductAddDialogComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    images: new FormControl('', [Validators.required])
  });
  categoryId = '';

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {

  }

}
