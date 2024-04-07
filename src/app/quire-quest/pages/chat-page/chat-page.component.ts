import { Component, Output } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {
  @Output() chat_1_id: string;
  chat_2_id: string;

  constructor(public chatService: ChatService) {
    this.chat_1_id = "";
    this.chat_2_id = "";

    this.chatService.getChatId1.subscribe((response: string) => {
      this.chat_1_id = response;
    });

    this.chatService.getChatId2.subscribe((response: string) => {
      this.chat_2_id = response;
    });
  }

  showProfile() {
    document.addEventListener("DOMContentLoaded", function(event) {
      const updateProductButton = document.getElementById('updateProductButton');
      if (updateProductButton) {
        updateProductButton.click();
      }
    });
  }

}
