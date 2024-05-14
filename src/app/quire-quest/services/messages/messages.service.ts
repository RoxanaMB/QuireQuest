import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  getMessages(): any {
    return this.http.get("https://qq-back.onrender.com/messages");
  }

  sendMessage(message: any): any {
    return this.http.post("https://qq-back.onrender.com/message", message);
  }
}
