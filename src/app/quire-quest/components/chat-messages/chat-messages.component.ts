import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit{

  @Input() messages: { role: string, name: string, content: string }[];
  @Input() topic: string;
  @Input() rate: number;
  @Input() just: string;
  @Input() ia_model: string;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor() {
    this.messages = [];
    this.ia_model = '';
    this.topic = '';
    this.rate = 0;
    this.just = '';
  }
}
