import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './quire-quest/pages/auth/auth.component';
import { AccountComponent } from './quire-quest/pages/account/account.component';
import { LoginPageComponent } from './quire-quest/pages/login-page/login-page.component';
import { SignUpPageComponent } from './quire-quest/pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './quire-quest/pages/home-page/home-page.component';
import { ChatPageComponent } from './quire-quest/pages/chat-page/chat-page.component';

import { NavbarComponent } from './quire-quest/components/navbar/navbar.component';
import { PricingCardComponent } from './quire-quest/components/pricing-card/pricing-card.component';
import { DescriptionComponent } from './quire-quest/components/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AccountComponent,
    LoginPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    NavbarComponent,
    ChatPageComponent,
    PricingCardComponent,
    DescriptionComponent,
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
