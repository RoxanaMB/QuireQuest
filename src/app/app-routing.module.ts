import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './quire-quest/pages/login-page/login-page.component';
import { SignUpPageComponent } from './quire-quest/pages/sign-up-page/sign-up-page.component';
import { AccountComponent } from './quire-quest/pages/account/account.component';
import { AuthComponent } from './quire-quest/pages/auth/auth.component';
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
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
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
