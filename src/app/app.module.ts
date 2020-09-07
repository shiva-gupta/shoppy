import { ErrorInterceptor } from './main/service/shared/error.interceptor';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/component/header/header.component';
import { SearchComponent } from './main/component/header/search/search.component';
import { SideBarComponent } from './main/component/header/side-bar/side-bar.component';
import { ToggleThemeComponent } from './main/component/header/toggle-theme/toggle-theme.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastComponent } from './main/component/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SideBarComponent,
    ToggleThemeComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
