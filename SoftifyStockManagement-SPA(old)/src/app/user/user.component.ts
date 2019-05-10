import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { User } from '../_models/Users';
import { HttpClient } from '@angular/common/http';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'app-register',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  cars = [{}];
  constructor(private authService: LoginService, private router: Router,
    private alertify: AlertifyService, private fb: FormBuilder, private http: HttpClient) { }
  registerForm: FormGroup;
  rowData: any; user: User;

  cols: any[];


  ngOnInit() {
    this.getAllRegister();
    this.createRegisterForm();
    this.cols = [
      { header: 'Id', field: 'UserId', width: 70 },
      { header: 'UserName', field: 'UserName' },
      { header: 'UserPass', field: 'UserPass' },
      { header: 'UserMail', field: 'UserMail' },
      { header: 'DisplayName', field: 'DisplayName' }
    ];
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      usermail: ['', Validators.required],
      displayname: ['', Validators.required],
      userpassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('userpassword').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.alertify.success('User Create Successfully !!');
        this.registerForm.reset();
        this.getAllRegister();
      }, error => {
        console.log(error);
        this.alertify.error(error);
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/user']);
        });
      });
    }
  }
  getAllRegister() {
    this.http.get('http://localhost:5000/api/login/GetUser').subscribe(response => {
      this.rowData = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }


  //rowData = this.registerdata;

}
