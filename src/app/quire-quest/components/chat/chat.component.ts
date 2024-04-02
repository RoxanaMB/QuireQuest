import { Component } from '@angular/core';
import { ServiceService } from './../../services/service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: { role: string, name: string, content: string }[];
  ia_model: string;

  constructor(public serviceService: ServiceService) { 
    this.messages = [];
    this.ia_model = '';

    this.serviceService.getUserMessage.subscribe((user_message: string) => {
      this.messages.push({ role: 'user', name: 'Usuario', content: user_message});
    });

    this.serviceService.getIAModel.subscribe((ia_model: string) => {
      this.ia_model = ia_model;
    });
  }

}
