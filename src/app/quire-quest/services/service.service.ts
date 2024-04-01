import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public ia_message = new BehaviorSubject('');
  public user_message = new BehaviorSubject('');
  public ia_model = new BehaviorSubject('');

  getIAMessage = this.ia_message.asObservable();
  getUserMessage = this.user_message.asObservable();
  getIAModel = this.ia_model.asObservable();

  constructor() { }

  setIAMessage(ia_message:string){
    this.ia_message.next(ia_message);
  }

  setUserMessage(user_message:string){
    this.user_message.next(user_message);
  }

  setIAModel(ia_model:string){
    this.ia_model.next(ia_model);
    console.log(ia_model);
  }
}
