import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { environment } from 'src/environments/environment';
import { Unit } from 'src/app/_models/Unit';
import {ConfirmationService} from 'primeng/api';
import { UnitService } from './unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})


export class UnitComponent implements OnInit {
  baseUrl = environment.apiUrl + 'BasicSettings/';
  dataSaved = false; unitIdUpdate = null;
  unitform: FormGroup;
  units: Unit;
  options: SelectItem[];
  constructor( private fb: FormBuilder, private alertify: AlertifyService, public unitService: UnitService ,
               public confirmService: ConfirmationService) { }

  ngOnInit() {
    this.unitService.getDataList();
    this.unitform = this.fb.group({
       UnitId: new FormControl(),
      UnitName: new FormControl('', Validators.required),
    });
}
resetForm() {
  this.unitform.reset();
  this.dataSaved = false;
}

CreateUnit() {

  this.units = Object.assign({}, this.unitform.value);
  this.units.UnitId = 0;
  console.log(this.units);
  if (this.unitIdUpdate == null) {
    this.unitService.postItem(this.units).subscribe(
      () => {
        this.dataSaved = true;
        this.alertify.success('Record saved Successfully');
        this.unitService.getDataList();
        this.unitIdUpdate = null;
        this.unitform.reset();
      }, error => {
        console.log(error);
        this.alertify.error(error);
      });
  } else {
    this.units.UnitId = this.unitIdUpdate;
    console.log(this.units);
    this.unitService.putItem(this.units).subscribe(() => {
      this.dataSaved = true;
      this.alertify.success('Record Updated Successfully');
      this.unitService.getDataList();
      this.unitIdUpdate = null;
      this.unitform.reset();
    }, error => {
      console.log(error);
      this.alertify.error(error);
    });
  }
}

OnPopulateItem(model: Unit) {
   this.dataSaved = false;
   this.unitIdUpdate = model.UnitId;
   this.unitform.setValue(model);
}


onDeleteItem(id: number) {
    this.confirmService.confirm({
    message: 'Are you sure that you want to perform this action?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    accept: () => {
      this.unitService.deleteItem(id).subscribe(res => {
        this.unitService.getDataList();
        this.alertify.success('Deleted successfully');
      });
    },
    reject: () => {
      this.alertify.error('Reject successfully');
  }
});
  }
}

