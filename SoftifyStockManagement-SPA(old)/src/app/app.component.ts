import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './_services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  constructor(private loginservice: LoginService) { }
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loginservice.decodetoken = this.jwtHelper.decodeToken(token);
    }
  }
  loggedIn() {
    return this.loginservice.loggedIn();

  }

}
