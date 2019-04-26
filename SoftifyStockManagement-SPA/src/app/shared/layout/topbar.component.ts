import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  model: any = {};
  constructor(public loginService: LoginService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {

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
