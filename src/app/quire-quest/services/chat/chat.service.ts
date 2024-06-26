import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chatId1 = new BehaviorSubject<string>("");
  public chatId2 = new BehaviorSubject<string>("");

  getChatId1 = this.chatId1.asObservable();
  getChatId2 = this.chatId2.asObservable();

  setChatId1(chatId: string) {
    this.chatId1.next(chatId);
  }

  setChatId2(chatId: string) {
    this.chatId2.next(chatId);
  }

  constructor(private http: HttpClient) { }

  createChat(chat: any): Observable<any> {
    return this.http.post("https://qq-back.onrender.com/chat", {
      Headers: {
        "Content-Type": "application/json",
      },
      body: chat,
    });
  }

  getChat(chat_id: string): Observable<any> {
    return this.http.get(`https://qq-back.onrender.com/chat/${chat_id}/messages`);
  }
}
