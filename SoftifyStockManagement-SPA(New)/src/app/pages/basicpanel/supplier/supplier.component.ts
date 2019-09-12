import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { environment } from 'src/environments/environment';
import { Supplier } from 'src/app/_models/Supplier';
import { SupplierService } from 'src/app/_services/supplier.service';
import {ConfirmationService} from 'primeng/api';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})


export class SupplierComponent implements OnInit {
  baseUrl = environment.apiUrl + 'BasicSettings/';
  dataSaved = false; supplierIdUpdate = null;
  supplierform: FormGroup;
  suppliers: Supplier;
  options: SelectItem[];
  constructor( private fb: FormBuilder, private alertify: AlertifyService, public suppService: SupplierService ,
               public confirmService: ConfirmationService) { }

  ngOnInit() {
    this.suppService.getCombo();
    this.suppService.getDataList();
    this.supplierform = this.fb.group({
      SupplierId: new FormControl(),
      SupplierCode: new FormControl(),
      SupplierName: new FormControl('', Validators.required),
      ContactName: new FormControl('', Validators.required),
      SupplierPhone: new FormControl('', Validators.required),
      ContactPhone:  new FormControl('', Validators.required),
      SupplierAddress: new FormControl(''),
      SupplierLocation: new FormControl(3, Validators.required),
    });
}
resetForm() {
  this.supplierform.reset();
  this.dataSaved = false;
}

CreateSupplier() {

  this.suppliers = Object.assign({}, this.supplierform.value);
  this.suppliers.SupplierId = 0; this.suppliers.SupplierCode = '';
  console.log(this.suppliers);
  if (this.supplierIdUpdate == null) {
    this.suppService.postItem(this.suppliers).subscribe(
      () => {
        this.dataSaved = true;
        this.alertify.success('Record saved Successfully');
        this.suppService.getDataList();
        this.supplierIdUpdate = null;
        this.supplierform.reset();
      }, error => {
        console.log(error);
        this.alertify.error(error);
      });
  } else {
    this.suppliers.SupplierId = this.supplierIdUpdate;
    console.log(this.suppliers);
    this.suppService.putItem(this.suppliers).subscribe(() => {
      this.dataSaved = true;
      this.alertify.success('Record Updated Successfully');
      this.suppService.getDataList();
      this.supplierIdUpdate = null;
      this.supplierform.reset();
    }, error => {
      console.log(error);
      this.alertify.error(error);
    });
  }
}

OnPopulateItem(model: Supplier) {
  console.log(model)
   this.dataSaved = false;
   this.supplierIdUpdate = model.SupplierId;
     this.supplierform.setValue(model);
  //  this.supplierform.controls.SupplierName.setValue(model.SupplierName);
  //  this.supplierform.controls.SupplierPhone.setValue(model.SupplierPhone);
  //  this.supplierform.controls.ContactName.setValue(model.ContactName);
  //  this.supplierform.controls.ContactPhone.setValue(model.ContactPhone);
  //  this.supplierform.controls.SupplierAddress.setValue(model.SupplierAddress);
  //  this.supplierform.controls.SupplierLocation.setValue(model.SupplierLocation);
  //  this.supplierform.controls.SupplierId.setValue(model.SupplierId);
}


onDeleteItem(id: number) {
    this.confirmService.confirm({
    message: 'Are you sure that you want to perform this action?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    accept: () => {
      this.suppService.deleteItem(id).subscribe(res => {
        this.suppService.getDataList();
        this.alertify.success('Deleted successfully');
      });
    },
    reject: () => {
      this.alertify.error('Reject successfully');
  }
});
  }
}

