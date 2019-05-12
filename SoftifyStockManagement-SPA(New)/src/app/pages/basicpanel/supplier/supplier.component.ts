import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  userform: FormGroup;
  constructor( private fb: FormBuilder, ) { }

  ngOnInit() {
    this.userform = this.fb.group({
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
        description: new FormControl(''),
        gender: new FormControl('', Validators.required)
    });

    // this.genders = [];
    // this.genders.push({label: 'Select Gender', value: ''});
    // this.genders.push({label: 'Male', value: 'Male'});
    // this.genders.push({label: 'Female', value: 'Female'});
}

}
