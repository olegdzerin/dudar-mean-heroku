import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';
import { map, retry, tap } from 'rxjs/operators'
import { UserTokenService } from './canActivate/user-token.service';
//import { tokenNotExpired } from 'angular2-jwt';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {
  token:any;
  user: any;
  constructor(
    private http: HttpClient, 
    private userToken: UserTokenService
  ) { }

  registerUser(user: any) {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
     return  this.http.post(
      // 'http://localhost:3000/account/reg',
      'account/reg',
      user,
      httpOptions)
  }

  authUser(user: any){
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
     return  this.http.post(
      // 'http://localhost:3000/account/auth',
      'account/auth',
      user,
      httpOptions)
  };
  storeUser(token: any, user: any){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
    this.userToken.token = token;
    this.userToken.user = user;
  }
  logout(){
    this.token = null;
    this.user = null;
    this.userToken.token = null;
    this.userToken.user = null;
    localStorage.clear();
  }

  isLoggedIn(){
  //  return tokenNotExpired();
  }
  
}
