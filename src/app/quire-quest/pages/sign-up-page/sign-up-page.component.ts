import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(public userService: UsersService) {
    this.username = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }

  register() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    this.userService.register(user).subscribe((response: {token: string}) => {
      const token = response.token;
      if (token) {
        localStorage.setItem("token", token);
        window.location.href = "/login";
      }
    });
  }

}
