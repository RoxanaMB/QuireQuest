import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  constructor(private http: HttpClient) { }

  getConversations(user_id: string) {
    return this.http.get(`http://127.0.0.1:5000/conversations/${user_id}`);
  }

  createConversation(user: string, chat_1: string, chat_2: string, message: string) {
    return this.http.post("http://127.0.0.1:5000/conversation", {
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
