import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post("https://qq-back.vercel.app/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.post("https://qq-back.vercel.app/register", user);
  }

  getUser(token: string): Observable<any> {
    return this.http.get("https://qq-back.vercel.app/user", {
      headers: {
        'x-access-token': token
      }
    });
  }
}
