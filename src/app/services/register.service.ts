import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registration(data:object){
    return this.http.post('http://localhost:8080/register/user',data)
  }
}
