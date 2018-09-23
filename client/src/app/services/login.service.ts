import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/observable';
import { Observable } from 'rxjs';
import { User } from './../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // public username : Object;
  public User : User;
  public API : string = 'http://192.168.1.9:3200/';

  constructor(public http : HttpClient) { }

  getAllUser() : Observable<User[]>{
    return this.http.get<User[]>(this.API + 'getAllUser');
  }

  getUserByUsername(username : string) : Observable<User[]>{
    return this.http.get<User[]>(this.API + 'getUserByUsername/' + username);
}
}
