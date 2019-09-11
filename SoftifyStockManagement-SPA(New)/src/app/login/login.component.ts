import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(public loginService: LoginService, private alertifymsg: AlertifyService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.loggedIn() ) {
    this.router.navigate(['pages/dashboard']);
    }
  }
  login() {
    this.loginService.login(this.model).subscribe(next => {
      this.alertifymsg.success('Logged in successfully');
    }, error => {
      console.log(error)
        this.alertifymsg.error(error);
    }, () => {
      this.router.navigate(['pages/dashboard']);
    }
    );
  }
  loggedIn() {
    return this.loginService.loggedIn();

  }
  logout() {
    localStorage.removeItem('token');
    this.alertifymsg.message('logged out !!');
    this.router.navigate(['login']);
  }

}
