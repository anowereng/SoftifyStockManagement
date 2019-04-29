import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { User } from '../_models/Users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private authService: LoginService, private router: Router,
    private alertify: AlertifyService, private fb: FormBuilder) { }


  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password:  new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  register() {
    this.registerForm.value();
  }
}
