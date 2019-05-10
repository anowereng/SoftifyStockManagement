import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(public loginService: LoginService, private alertifymsg: AlertifyService, private router: Router) { }

  ngOnInit() {
    if(this.loginService.loggedIn() ) {
    this.router.navigate(['/dashboard']);
    }
  }
  login() {
    this.loginService.login(this.model).subscribe(next => {
      this.alertifymsg.success('Logged in successfully');
        //this.router.navigate(['/dashboard']);
      // console.log('Logged in Successfully');
    }, error => {
        this.alertifymsg.error(error);
    }, () => {
      this.router.navigate(['/dashboard']);
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
    this.alertifymsg.message('logged out !!');
    this.router.navigate(['/login']);
  }


}
