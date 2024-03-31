import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit{
  messages: { user: string, ia: string }[];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(public serviceService: ServiceService, public messagesService: MessagesService) {
    this.messages = [];

    this.serviceService.getIAMessage.subscribe((ia_message: string) => {
      this.messages[this.messages.length - 1].ia = ia_message;
    });

    this.serviceService.getUserMessage.subscribe((user_message: string) => {
      this.messages.push({ user: user_message, ia: '' });
    });
  }

}
