import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
  callLogin(username:string, password:string){
    return this.http.post(
      'http://127.0.0.1:8000/api/auth/login',
      {
        "username": username,
        "password": password
      }
    ).pipe(
      map(response =>{
      })
    )
  }
}
