import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './quire-quest/pages/login-page/login-page.component';
import { SignUpPageComponent } from './quire-quest/pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './quire-quest/pages/home-page/home-page.component';
import { ChatPageComponent } from './quire-quest/pages/chat-page/chat-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
  {
    path: 'chat',
    component: ChatPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
