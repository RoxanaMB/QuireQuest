import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post("https://qq-back.onrender.com/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.post("https://qq-back.onrender.com/register", user);
  }

  getUser(token: string): Observable<any> {
    return this.http.get("https://qq-back.onrender.com/user", {
      headers: {
        'x-access-token': token
      }
    });
  }
}
