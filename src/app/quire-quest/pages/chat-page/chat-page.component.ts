import { Component } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { ConversationsService } from '../../services/conversations/conversations.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent {
  chat_1_id: string;
  chat_2_id: string;
  message: string;
  user_id: string;

  constructor(public chatService: ChatService, public conversationService: ConversationsService, public usersService: UsersService) {
    this.chat_1_id = "";
    this.chat_2_id = "";
    this.message = "";
    this.user_id = "";

    this.chatService.getChatId1.subscribe((response: string) => {
      this.chat_1_id = response;
    });

    this.chatService.getChatId2.subscribe((response: string) => {
      this.chat_2_id = response;
    });

    const token = localStorage.getItem('token');

    if (!token) {
      this.user_id = '';
    } else {
      this.usersService.getUser(token).subscribe((response: {user_id: string}) => {
        this.user_id = response.user_id;
      });
    }
  }

  onReciveMessage(message: string) {
    this.message = message;

    // Se crea la conversación (si no existe)
    this.conversationService.createConversation(this.user_id, this.chat_1_id, this.chat_2_id, this.message).subscribe();
  }

}
