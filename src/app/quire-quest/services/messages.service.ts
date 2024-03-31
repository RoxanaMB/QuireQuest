import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  getMessages(): any {
    return this.http.get("http://127.0.0.1:5000/messages");
  }

  sendMessage(message: any): any {
    return this.http.post("http://127.0.0.1:5000/message", message);
  }
}
