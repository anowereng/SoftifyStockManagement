import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(public loginService: LoginService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.loginService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
      // console.log('Logged in Successfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/login']);
    }
    );
  }
  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.loginService.loggedIn();

  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out !!');
    this.router.navigate(['/login']);
  }

}
