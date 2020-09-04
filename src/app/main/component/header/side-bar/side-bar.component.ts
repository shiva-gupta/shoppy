import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  display = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.display = !this.display;
  }

}
