import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Supplier } from 'src/app/_models/Supplier';
import { SupplierService } from 'src/app/_services/supplier.service';
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
  constructor( private fb: FormBuilder, private alertify: AlertifyService, private http: HttpClient,
               public suppService: SupplierService) { }

  ngOnInit() {
    this.suppService.getCombo();
    this.suppService.getDataList();
    this.supplierform = this.fb.group({
      name: new FormControl('', Validators.required),
       reptname: new FormControl('', Validators.required),
       phone: new FormControl('', Validators.required),
        reptphone:  new FormControl('', Validators.required),
        address: new FormControl(''),
        location: new FormControl(3, Validators.required),
        // location : ['']
    });

    // this.getCombo();
}
onFormSubmit() {
  this.dataSaved = false;
  const supplier = this.supplierform.value;
  // this.CreateSupplier(this.suppliers);
  this.supplierform.reset();
}
loadSupplierToEdit(supplierId: string) {
  this.suppService.getSupplierById(supplierId).subscribe(supplier => {
    this.dataSaved = false;
    this.supplierIdUpdate = supplier.SupplierId;
    this.supplierform.controls.SupplierName.setValue(supplier.SupplierName);
    this.supplierform.controls.SupplierCode.setValue(supplier.SupplierCode);
    this.supplierform.controls.ContactPhone.setValue(supplier.ContactPhone);
  });
}

resetForm() {
  this.supplierform.reset();
  this.dataSaved = false;
}

CreateSupplier() {
  // console.log(supplier);
  // console.log(this.supplierIdUpdate);
  this.suppliers = Object.assign({}, this.supplierform.value);
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
    this.suppService.putItem(this.suppliers).subscribe(() => {
      this.dataSaved = true;
      this.alertify.error('Record Updated Successfully');
      this.suppService.getDataList();
      this.supplierIdUpdate = null;
      this.supplierform.reset();
    });
  }
}

SaveSupplier() {
  if (this.supplierform.valid) {
    this.suppliers = Object.assign({}, this.supplierform.value);
    console.log(this.suppliers);
    this.suppService.postItem(this.suppliers).subscribe(() => {
      this.alertify.success('Supplier Create Successfully !!');
      this.supplierform.reset();
      this.suppService.getDataList();
    }, error => {
      console.log(error);
      this.alertify.error(error);
    });
  }
}
OnPopulateItem(model: Supplier) {
   console.log(model);
  // this.suppService.formData = Object.assign({}, emp);

   this.suppliers = Object.assign({}, model);
   console.log(this.suppliers);
}

// getSupplierList() {
//   this.http.get(this.baseUrl + 'GetSupplier').subscribe(response => {
//     this.suppliers = response;
//     console.log(this.suppliers);
//   }, error => {
//     this.alertify.error(error);
//     console.log(error);
//   });
// }

// getCombo() {
//   this.http.get(this.baseUrl + 'GetCombo')
//   .toPromise().then(res => this.locationList = res as SelectList[]);

// }
// getCombo() {
//   this.http.get(this.baseUrl + 'GetCombo').subscribe(response => {
//      this.locationList = response;
//     //console.log(this.locationList);
//   }, error => {
//     this.alertify.error(error);
//     console.log(error);
//   });
// }

OnEditItem(supplierId: any) {
  console.log(supplierId);
}

onDeleteItem(id: number) {
  if (confirm('Are you sure to delete this record?')) {
    this.suppService.deleteItem(id).subscribe(res => {
      this.suppService.getDataList();
      this.alertify.success('Deleted successfully');
    });
  }
}
// insertRecord(form: NgForm) {
//   this.suppService.postItem(form.value).subscribe(res => {
//     this.alertify.success('Inserted successfully');
//     this.resetForm(form);
//     this.service.refreshList();
//   });
// }


// dataSave() {
//   if (this.supplierform.valid) {
//     console.log(this.supplierform.value);
//     // this.suppliers = Object.assign({}, this.supplierform.value);
//     this.suppService.postItem(this.suppliers).subscribe(() => {
//       this.alertify.success('User Create Successfully !!');
//       this.supplierform.reset();
//       this.suppService.refreshList();
//     }, error => {
//       this.alertify.error(error);
//     });
//   }
}

// updateRecord(form: NgForm) {
//   this.service.putSupplier(form.value).subscribe(res => {
//     this.toastr.info('Updated successfully', 'EMP. Register');
//     this.resetForm(form);
//     this.service.refreshList();
//   });

// }
