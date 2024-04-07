import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post("http://127.0.0.1:5000/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.post("http://127.0.0.1:5000/register", user);
  }

  getUser(token: string): Observable<any> {
    return this.http.get("http://127.0.0.1:5000/user", {
      headers: {
        'x-access-token': token
      }
    });
  }
}
