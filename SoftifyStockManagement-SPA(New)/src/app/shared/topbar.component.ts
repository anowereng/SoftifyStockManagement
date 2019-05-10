import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
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
    return this.loginService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out !!');
    this.router.navigate(['/login']);
  }

}
