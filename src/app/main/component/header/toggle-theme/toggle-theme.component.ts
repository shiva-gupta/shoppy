import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent implements OnInit {

  checked = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme(): void {
    this.checked = !this.checked;

    if (this.checked) {
      this.trans();
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      this.trans();
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  trans(): void {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 1000);
  }

}
