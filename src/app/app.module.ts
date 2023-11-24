import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './quire-quest/pages/auth/auth.component';
import { AccountComponent } from './quire-quest/pages/account/account.component';
import { LoginPageComponent } from './quire-quest/pages/login-page/login-page.component';
import { SignUpPageComponent } from './quire-quest/pages/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AccountComponent,
    LoginPageComponent,
    SignUpPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
