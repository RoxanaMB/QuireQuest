import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MessagesService } from './../../services/messages.service';
import { UsersService } from './../../services/users.service';
import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  messages: { role: string, name: string, content: string }[];
  messages_: { role: string, name: string, content: string, rate: number, just: string, topic: string }[];
  topic: string;
  rate: number;
  ia_model: string;
  user_name: string;
  user_id: string;
  just: string;
  
  @Input() chat: string;
  @Input() set content(value: string) {
    if (!value) {
      return;
    }
    this.messages.push({ role: 'user', name: this.user_name, content: value });
    this.messages_.push({ role: 'user', name: this.user_name, content: value, rate: 0, just: '', topic: ''});
    this.sendMessage();
  }

  @Output() dataChange = new EventEmitter();

  constructor(public messagesService: MessagesService, public usersService: UsersService, public chatService: ChatService) { 
    this.messages = [];
    this.messages_ = [];
    this.ia_model = 'FireFunction v1';
    this.topic = '';
    this.rate = 0;
    this.chat = '';
    
    this.user_name = '';
    this.user_id = '';

    this.content = "";
    this.just = '';
  }

  ngOnInit() {
    this.messages = [];
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    } else {
      this.usersService.getUser(token).subscribe((response: {user_id: string, user_name: string}) => {
        this.user_name = response.user_name;
        this.user_id = response.user_id;

        // Se emite el evento para que el padre pueda recibir el id del usuario
        this.dataChange.emit(this.user_id);
    
        this.chatService.createChat(this.user_id).subscribe((response: any) => {
          this.chatService.setChatId1(response[0].id);
        });
        this.chatService.createChat(this.user_id).subscribe((response: any) => {
          this.chatService.setChatId2(response[0].id);
        });
      });
    }
  }

  onSelectModel(event: any) {
    this.ia_model = event;
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
      console.log(message.chat);
      console.log(response);
      this.rate = response.cal;
      this.topic = response.tema;
      this.just = response.just;
      this.messages.push({ role: 'assistant', name: this.ia_model, content: response.response});
      this.messages_.push({ role: 'assistant', name: this.ia_model, content: response.response, rate: this.rate, just: this.just, topic: this.topic});
    });
  }

}
