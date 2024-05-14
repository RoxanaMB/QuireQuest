import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  constructor(private http: HttpClient) { }

  getConversations(user_id: string) {
    return this.http.get(`https://qq-back.onrender.com/conversations/${user_id}`);
  }

  getConversation(conversation_id: string) {
    return this.http.get(`https://qq-back.onrender.com/conversation/${conversation_id}`);
  }

  createConversation(user: string, chat_1: string, chat_2: string, message: string) {
    return this.http.post("https://qq-back.onrender.com/conversation", {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        user: user,
        chat_1: chat_1,
        chat_2: chat_2,
        message: message
      }
    });
  }

} 
