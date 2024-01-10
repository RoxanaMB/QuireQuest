import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string;
  password: string;

  constructor(public userService: UsersService) {
    this.email = "";
    this.password = "";
  }

  login() {
    const user = {
      email: this.email,
      password: this.password
    };
    this.userService.login(user).subscribe((response: {token: string}) => {
      const token = response.token;
      console.log(token);
      if (token) {
        localStorage.setItem("token", token);
        window.location.href = "/chat";
      }
    });
  }
}
