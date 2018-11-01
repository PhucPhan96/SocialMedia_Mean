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
  public User: User;
  public API: string = 'http://localhost:3200/';

  constructor(public http: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.API + 'getAllUsers/');
  }

  login(username: string): Observable<User[]> {
    return this.http.get<User[]>(this.API + 'login/' + username);
  }
}
