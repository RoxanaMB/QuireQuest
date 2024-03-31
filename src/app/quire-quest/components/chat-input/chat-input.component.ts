import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  content: string;
  topic: string;
  rate: number;
  chat: string;

  constructor(public messagesService: MessagesService, public serviceService: ServiceService) {
    this.content = "";
    this.topic = "";
    this.rate = 0;
    this.chat = "";
  }

  sendMessage() {
    const message = {
      content: this.content,
      topic: this.topic,
      rate: this.rate,
      chat: this.chat
    };
    
    this.serviceService.setUserMessage(this.content);

    this.messagesService.sendMessage(message).subscribe((response: any) => {
      this.serviceService.setIAMessage(response.response);
    });
  }

}
