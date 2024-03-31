import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public ia_message = new BehaviorSubject('');
  public user_message = new BehaviorSubject('');

  getIAMessage = this.ia_message.asObservable();
  getUserMessage = this.user_message.asObservable();

  constructor() { }

  setIAMessage(ia_message:string){
    this.ia_message.next(ia_message);
  }

  setUserMessage(user_message:string){
    this.user_message.next(user_message);
  }
}
