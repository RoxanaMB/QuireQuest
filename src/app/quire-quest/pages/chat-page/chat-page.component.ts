import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ConversationsService } from '../../services/conversations.service';
import { UsersService } from '../../services/users.service';

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
      console.log(this.chat_1_id);
    });

    this.chatService.getChatId2.subscribe((response: string) => {
      this.chat_2_id = response;
      console.log(this.chat_2_id);
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


  // TODO: Borrar
  onReciveConversation(conversation: [{id: string, chat_1: string, chat_2: string, created_at: string, title: string | null, user: string}]) {
    console.log(conversation[0].chat_1);
    // this.chatService.setChatId1(conversation[0].chat_1);
    // this.chatService.setChatId2(conversation[0].chat_2);

    // this.chat_1_id = conversation[0].chat_1;
    // this.chat_2_id = conversation[0].chat_2;
    console.log(this.chat_1_id);
    console.log(this.chat_2_id);
  }

}
