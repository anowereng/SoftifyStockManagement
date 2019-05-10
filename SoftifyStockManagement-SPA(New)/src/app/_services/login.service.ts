import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  baseUrl = environment.apiUrl + 'login/';
  jwtHelper = new JwtHelperService();
  decodetoken: any;
constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model)
  .pipe(
  map((response: any) => {
  const user = response;
  if (user) {
    localStorage.setItem('token', user.token);
    this.decodetoken = this.jwtHelper.decodeToken(user.token);
    console.log(this.decodetoken);
  }
  }));
    }
  register(model: any) {
    return this.http.post(this.baseUrl + 'Register', model);
    // .pipe(
    //   map((response: any) => {
    //     const user = response;
    //     if (user) {
    //       localStorage.setItem('token', user.token);
    //     }
    //   }));
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
