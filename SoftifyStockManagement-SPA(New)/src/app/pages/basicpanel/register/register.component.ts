import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { LoginService } from 'src/app/_services/login.service';
import { User } from 'src/app/_models/Users';
import * as Handsontable from 'handsontable';;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private authService: LoginService, private router: Router,
               private alertify: AlertifyService, private fb: FormBuilder,
               private http: HttpClient) { }

  registerForm: FormGroup;
  rowData: any; user: User;
  // dataset: any;

  dataset: any;
  fetched = false;
  error = false;
  saveMessages: string[] = [];

  genderList: any = [
    'male', 'female'
  ];

  columns: any[] = [
    { data: 'UserId', title: 'UserId', readOnly: true },
    { data: 'UserName', title: 'UserName' },
    // { data: 'UserPass', title: 'UserPass', type: 'numeric' },
    // { data: 'UserMail', title: 'UserMail' },
    // { data: 'DisplayName', title: 'DisplayName' },

    { data: 'User', title: 'Gender', type: 'dropdown', source: this.genderList },
    // { data: 'phone', title: 'Phone' },
    // { data: 'registered', title: 'Registered' },
    { data: 'isActive', title: 'Is active?', type: 'checkbox' },

    {
      data: 'date',
      dateFormat: 'DD/MM/YYYY',
      // allow empty values only for the 'date' column
      allowEmpty: true
    }
  ]

  ngOnInit() {
    this.getAllRegister();
    this.createRegisterForm();
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
          this.router.navigate(['/register']);
        });
      });
    }
  }
  getAllRegister() {
    this.http.get('http://localhost:5000/api/login/GetUser').subscribe(response => {
      // this.settings.registerdata = response;
      this.rowData = response;
      this.dataset = response;
      console.log(this.dataset);
    }, error => {
      console.log(error);
    });
  }

}
