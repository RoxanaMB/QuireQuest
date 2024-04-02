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
  ia_model: string;
  messages: { role: string, name: string, content: string }[];

  constructor(public messagesService: MessagesService, public serviceService: ServiceService) {
    this.content = "";
    this.topic = "";
    this.rate = 0;
    this.chat = "";
    this.ia_model = "";
    this.messages = [];

    this.serviceService.getIAModel.subscribe((ia_model: string) => {
      this.ia_model = ia_model;
      console.log(this.ia_model);
    });

    this.serviceService.getMessages.subscribe((messages: any) => {
      this.messages = messages;
      console.log(this.messages);
    });
  }

  sendMessage() {
    const message = {
      content: this.messages,
      topic: this.topic,
      rate: this.rate,
      chat: this.chat,
      ia_model: this.ia_model
    };
    
    this.serviceService.setUserMessage(this.content);

    this.messagesService.sendMessage(message).subscribe((response: any) => {
      this.serviceService.setIAMessage(response.response);
    });
  }

}
