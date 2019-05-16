import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  baseUrl = environment.apiUrl + 'BasicSettings/';
  supplierform: FormGroup; locationList: any;
  suppliers: any;    cols: any[];
  constructor( private fb: FormBuilder, private alertify: AlertifyService, private http: HttpClient) { }

  ngOnInit() {
    this.supplierform = this.fb.group({
      name: new FormControl('', Validators.required),
       reptname: new FormControl('', Validators.required),
       phone: new FormControl('', Validators.required),
        reptphone:  new FormControl('', Validators.required),
        location: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        address: new FormControl('')
    });
    this.cols = [
      { field: 'SupplierCode', header: 'Code', width: '5%'},
      { field: 'SupplierName', header: 'Name', width: '500%'},
      { field: 'SupplierPhone', header: 'Phone', width: '25%' },
  ];
  //   this.locationList = [
  //     {label:'Select City', value:null},
  //     {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
  //     {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
  //     {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
  //     {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
  //     {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
  // ];

    // this.genders = [];
    // this.genders.push({label: 'Select Gender', value: ''});
    // this.genders.push({label: 'Male', value: 'Male'});
    // this.genders.push({label: 'Female', value: 'Female'});
    this.getSupplierList();
    this.getCombo();
}
getSupplierList() {
  this.http.get(this.baseUrl + 'GetSupplier').subscribe(response => {
    this.suppliers = response;
    console.log(this.suppliers);
  }, error => {
    this.alertify.error(error);
    console.log(error);
  });
}
getCombo() {
  this.http.get(this.baseUrl + 'GetCombo').subscribe(response => {
    this.locationList = response;
    console.log(this.locationList);
  }, error => {
    this.alertify.error(error);
    console.log(error);
  });
}

}
