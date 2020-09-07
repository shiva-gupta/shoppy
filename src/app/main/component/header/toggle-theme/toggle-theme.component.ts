import { AppState } from './../../../store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import { Observable } from 'rxjs';
import { isDark } from 'src/app/main/store/selectors/theme.selector';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent implements OnInit {

  checked = false;
  checked$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(fromStore.themeSelectors.isDark).subscribe((isDark: boolean) => {
      this.checked = isDark;
    });
  }

  toggleTheme(): void {
    this.checked = !this.checked;

    this.store.dispatch(fromStore.ThemeActions.changeThemeAction({dark: this.checked}));
  }
}
