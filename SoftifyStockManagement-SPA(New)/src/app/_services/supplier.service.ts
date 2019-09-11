import { Injectable } from '@angular/core';
import { Supplier } from 'src/app/_models/Supplier';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SelectList } from './selectlist';
import { SelectComboTwo } from './SelectComboTwo';
import { AlertifyService } from 'src/app/_services/alertify.service';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  formData: Supplier;
  list: Supplier[];
  locationList: SelectComboTwo[];
  readonly rootURL = environment.apiUrl + 'BasicSettings/';

  constructor(private http: HttpClient, private alertifymsg: AlertifyService) { }

  postItem(model: any) {
   return this.http.post(this.rootURL + 'SupplierSave', model );
  }
  register(model: any) {
    return this.http.post(this.rootURL + 'Hello', model);
  }
  getDataList() {
    this.http.get(this.rootURL + 'GetSupplierList')
    .toPromise().then(res => this.list = res as Supplier[]);
    console.log(this.list);
  }

  putItem(formData: Supplier) {
    return this.http.put(this.rootURL + 'SupplierUpdate/' + formData.SupplierId, formData);
   }

   getSupplierById(supplierId: string): Observable<Supplier> {
    return this.http.get<Supplier>(this.rootURL + 'GetEmployeeDetailsById/' + supplierId);
  }

   deleteItem(id: number) {
    return this.http.delete(this.rootURL + 'SupplierDelete/' + id);
   }

  getCombo() {
    this.locationList = [];
    this.http.get(this.rootURL + 'GetSupplierCombo').subscribe(response => {
      this.locationList = response as SelectComboTwo[];
      console.log(this.locationList);
    }, error => {
      this.alertifymsg.error(error);
      console.log(error);
    });
  }
}
