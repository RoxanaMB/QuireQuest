import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent {
  chat_1_id: string;
  chat_2_id: string;
  message: string;

  constructor(public chatService: ChatService) {
    this.chat_1_id = "";
    this.chat_2_id = "";
    this.message = "";

    this.chatService.getChatId1.subscribe((response: string) => {
      this.chat_1_id = response;
    });

    this.chatService.getChatId2.subscribe((response: string) => {
      this.chat_2_id = response;
    });
  }

  onReciveMessage(message: string) {
    this.message = message;
  }

}
