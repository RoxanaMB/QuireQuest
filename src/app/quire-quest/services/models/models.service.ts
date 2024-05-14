import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(private http: HttpClient) { }

  getModels(): any {
    return this.http.get("https://qq-back.onrender.com/models");
  }
}
