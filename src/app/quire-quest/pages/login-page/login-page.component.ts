import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { ChatService } from '../../services/chat/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string;
  password: string;

  constructor(public userService: UsersService, public chatService: ChatService, public router: Router) {
    this.email = "";
    this.password = "";
  }

  login() {
    const user = {
      email: this.email,
      password: this.password
    };
    this.userService.login(user).subscribe((response: {token: string, user_name: string, user_id: string}) => {
      const token = response.token;
      if (token) {
        localStorage.setItem("token", token);
        this.chatService.createChat(response.user_id).subscribe((response: any) => {
          this.chatService.setChatId1(response[0].id);
        });
        this.chatService.createChat(response.user_id).subscribe((response: any) => {
          this.chatService.setChatId2(response[0].id);
        });
        this.router.navigate(["/chat"]);
      } else {
        alert("Invalid email or password");
      }
    });
  }
}
