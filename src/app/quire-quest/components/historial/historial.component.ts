import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  user_id: string;
  user_name: string;

  constructor(private usersService: UsersService, private chatService: ChatService, private router: Router) {
    this.user_id = '';
    this.user_name = '';

    const token = localStorage.getItem('token');

    if (!token) {
      this.user_id = ''
      this.user_name = '';
    } else {
      this.usersService.getUser(token).subscribe((response: {user_id: string, user_name: string}) => {
        this.user_id = response.user_id;
        this.user_name = response.user_name;
      });
    }
  }

  // Funcion que crea un nuevo chat al hacer click en el boton de nuevo chat
  newChat() {
    console.log(this.user_id);
    console.log(this.user_name);
    this.chatService.createChat(this.user_id).subscribe((response: any) => {
      this.chatService.setChatId1(response[0].id);
    });
    this.chatService.createChat(this.user_id).subscribe((response: any) => {
      this.chatService.setChatId2(response[0].id);
    });

    this.router.navigate(['/chat']);
  }

}
