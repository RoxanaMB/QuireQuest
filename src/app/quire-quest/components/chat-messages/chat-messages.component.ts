import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit{

  @Input() messages_: { role: string, name: string, content: string, rate: number, just: string, topic: string }[];
  @Input() ia_model: string;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor() {
    this.messages_ = [];
    this.ia_model = '';
  }
}
