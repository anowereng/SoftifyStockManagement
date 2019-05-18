import { Injectable } from '@angular/core';
import { Supplier } from 'src/app/_models/Supplier';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SelectList } from './selectlist';
import { SelectComboTwo } from './SelectComboTwo';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  formData: Supplier;
  list: Supplier[];
  locationList: SelectComboTwo[];
  suppliers: any;
  readonly rootURL = environment.apiUrl + 'BasicSettings/';

  constructor(private http: HttpClient) { }

  postItem(model: any) {
   return this.http.post(this.rootURL + 'SupplierSave', model );
  }
  register(model: any) {
    return this.http.post(this.rootURL + 'Hello', model);
  }
  getDataList() {
    this.http.get(this.rootURL + 'GetSupplier')
    .toPromise().then(res => this.list = res as Supplier[]);
    console.log(this.list);
  }

  putItem(formData: Supplier) {
    return this.http.put(this.rootURL + 'Employee/' + formData.SupplierId, formData);
   }

   getSupplierById(supplierId: string): Observable<Supplier> {
    return this.http.get<Supplier>(this.rootURL + 'GetEmployeeDetailsById/' + supplierId);
  }

   deleteItem(id: number) {
    return this.http.delete(this.rootURL + '/Employee/' + id);
   }

  //  getCombo() {
  //   this.http.get(this.rootURL + 'GetCombo')
  //   .toPromise().then(res => this.locationList = res as SelectList[]);
  // }
  // getCombo(): Observable<SelectList[]> {
  //   return this.http.get<SelectList[]>(this.rootURL + 'GetCombo');
  // }

  getCombo() {
    this.locationList = [];
    this.http.get('http://localhost:5000/api/BasicSettings/GetCombo').subscribe(response => {
      this.locationList = response as SelectComboTwo[];
      console.log(this.locationList);
    }, error => {
      console.log(error);
    });
  }
}
