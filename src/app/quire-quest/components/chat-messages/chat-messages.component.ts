import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit{

  @Input() messages: { role: string, name: string, content: string }[];
  ia_model: string;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(public serviceService: ServiceService) {
    this.messages = [];
    this.ia_model = '';

    this.serviceService.getIAModel.subscribe((ia_model: string) => {
      this.ia_model = ia_model;
    });

    this.serviceService.getUserMessage.subscribe((user_message: string) => {
      this.messages.push({ role: 'user', name: 'Usuario', content: user_message});
      console.log(this.messages);
    });

    this.serviceService.getIAMessage.subscribe((ia_message: string) => {
      this.messages.push({ role: 'assistant', name: this.ia_model, content: ia_message});
      console.log(this.messages);
    });

    this.serviceService.setMessages(this.messages);
  }
}
