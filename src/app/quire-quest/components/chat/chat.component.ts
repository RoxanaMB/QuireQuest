import { Component, Input } from '@angular/core';
import { MessagesService } from './../../services/messages.service';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  messages: { role: string, name: string, content: string }[];
  topic: string;
  rate: number;
  @Input() chat: string;
  ia_model: string;
  user_name: string;

  constructor(public messagesService: MessagesService, public usersService: UsersService) { 
    this.messages = [];
    this.ia_model = 'FireFunction v1';
    this.topic = '';
    this.rate = 0;
    this.chat = '';
    this.user_name = '';

    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/login';
    } else {
      this.usersService.getUser(token).subscribe((response: {user_id: string, user_name: string}) => {
        this.user_name = response.user_name;
      });
    }
  }

  onSelectModel(event: any) {
    this.ia_model = event;
  }

  onChangeData(event: any) {
    this.messages.push({ role: 'user', name: this.user_name, content: event });
    this.sendMessage();
  }

  sendMessage() {
    const message = {
      content: this.messages,
      topic: this.topic,
      rate: this.rate,
      chat: this.chat,
      ia_model: this.ia_model
    };

    this.messagesService.sendMessage(message).subscribe((response: any) => {
      console.log(message.chat);
      this.messages.push({ role: 'assistant', name: this.ia_model, content: response.response });
    });
  }

}
