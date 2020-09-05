import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/component/header/header.component';
import { SearchComponent } from './main/component/header/search/search.component';
import { SideBarComponent } from './main/component/header/side-bar/side-bar.component';
import { ToggleThemeComponent } from './main/component/header/toggle-theme/toggle-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SideBarComponent,
    ToggleThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
