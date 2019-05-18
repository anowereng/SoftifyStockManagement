import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SelectItem } from 'primeng/api';
import { SelectList } from 'src/app/_services/selectlist';
import { Combo2 } from 'src/app/_services/combo2';
import { SelectComboTwo } from 'src/app/_services/SelectComboTwo';

@Component({
  selector: 'demo-app',
  templateUrl: './demo.component.html'
})

export class DemoComponent implements OnInit {

  options: SelectList[];
  // cities2: {label: string, value: number}[];
  cities2: SelectComboTwo[];
  locationList: SelectItem[];
  supplierform: FormGroup;

  constructor( private http: HttpClient, private fb: FormBuilder ) {}

    ngOnInit() {
  //   this.http.get('http://localhost:5000/api/BasicSettings/GetCombo').subscribe(response => {
  //     this.locationList = response as SelectItem[];
  //     console.log(this.locationList);
  // });
   this.getAllRegister();
   this.options = [

        {label: 'John', value: 1},
      {label: 'Kan', value: 2}


        ];
          // An array of cities
   this.cities2 = [
      { label: 'test 1', value: 1 },
      { label: 'test 2', value: 2 },
      { label: 'test 3', value: 3 },
      { label: 'test 4', value: 4 }
        ];

   this.supplierform = this.fb.group({
            location: new FormControl(this.options[1].value),
            city: [this.cities2[1].value]
        });

  //   this.locationList = [
  //     {label: 'Select 1', value: 1},
  //     {label: 'Select 2', value: 2},
  //     {label: 'Select 3', value: 3},
  // ];
    //  this.control = new FormControl(this.locationList[2].value);
  }

  getAllRegister() {
    this.cities2 = [];
    this.cities2.push({ label: 'Select Item', value: -1});
    this.http.get('http://localhost:5000/api/BasicSettings/GetCombo').subscribe(response => {
      this.cities2 = response as SelectComboTwo[];
      console.log(this.cities2);

    }, error => {
      console.log(error);
    });
  }

  SaveSupplier() {
    this.supplierform.value.location.value;
    console.log(this.supplierform.value);
  }
}



