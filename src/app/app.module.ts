import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { AutosizeModule } from 'ngx-autosize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './quire-quest/pages/login-page/login-page.component';
import { SignUpPageComponent } from './quire-quest/pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './quire-quest/pages/home-page/home-page.component';
import { ChatPageComponent } from './quire-quest/pages/chat-page/chat-page.component';

import { NavbarComponent } from './quire-quest/components/navbar/navbar.component';
import { PricingCardComponent } from './quire-quest/components/pricing-card/pricing-card.component';
import { DescriptionComponent } from './quire-quest/components/description/description.component';
import { HistorialComponent } from './quire-quest/components/historial/historial.component';
import { ChatInputComponent } from './quire-quest/components/chat-input/chat-input.component';
import { ChatMessagesComponent } from './quire-quest/components/chat-messages/chat-messages.component';
import { ChatComponent } from './quire-quest/components/chat/chat.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    NavbarComponent,
    ChatPageComponent,
    PricingCardComponent,
    DescriptionComponent,
    HistorialComponent,
    ChatInputComponent,
    ChatMessagesComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AutosizeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
