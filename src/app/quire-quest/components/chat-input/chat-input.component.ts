import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  @Output() dataChange = new EventEmitter();
  
  content: string;

  constructor(public messagesService: MessagesService) {
    this.content = "";
  }

  click() {
    this.dataChange.emit(this.content);
  }
}
