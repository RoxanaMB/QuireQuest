import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(private http: HttpClient) { }

  getModels(): any {
    return this.http.get("http://127.0.0.1:5000/models");
  }
}
