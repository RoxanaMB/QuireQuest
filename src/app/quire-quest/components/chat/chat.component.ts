import { Component } from '@angular/core';
import { MessagesService } from './../../services/messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  messages: { role: string, name: string, content: string }[];
  topic: string;
  rate: number;
  chat: string;
  ia_model: string;

  constructor(public messagesService: MessagesService) { 
    this.messages = [];
    this.ia_model = '';
    this.topic = '';
    this.rate = 0;
    this.chat = '';
  }

  onSelectModel(event: any) {
    console.log(event);
    this.ia_model = event;
  }

  onChangeData(event: any) {
    console.log(event);
    this.messages.push({ role: 'user', name: 'Usuario', content: event });
    console.log(this.messages);

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
      this.messages.push({ role: 'assistant', name: this.ia_model, content: response.response });
      console.log(response.response);
    });
  }

}
