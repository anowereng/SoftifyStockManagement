import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { User } from '../_models/Users';
import { HttpClient } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CustomizedCellComponent } from '../customized-cell/customized-cell.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor ( private authService: LoginService, private router: Router,
    private alertify: AlertifyService, private fb: FormBuilder, private http: HttpClient) { }
  registerForm: FormGroup;
  rowData: any; user: User;
  private gridApi;
  private frameworkComponents;
  columnDefs = [
    { headerName: 'Id', field: 'UserId', width:70, filter:'agNumberColumnFilter'},
    { headerName: 'UserName', field: 'UserName', width: 150, filter: 'agTextColumnFilter'},
    { headerName: 'UserPass', field: 'UserPass', width: 150, filter: 'agDateColumnFilter' },
    { headerName: 'UserMail', field: 'UserMail', width: 150},
    { headerName: 'DisplayName', field: 'DisplayName', width: 150},
    { headerName: 'Display', width: 150, cellRenderer: 'customizedDisplaycell' }
  ];

  ngOnInit() {
    this.getAllRegister();
    this.createRegisterForm();
    this.frameworkComponents = {
      customizedDisplaycell: CustomizedCellComponent
    }
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
      this.rowData = response;
    console.log(response);
    }, error => {
      console.log(error);
    });
  }
  onBtnExport() {
    var params = {};
    this.gridApi.exportDataAsCsv(params);
  }

  //rowData = this.registerdata;

}
