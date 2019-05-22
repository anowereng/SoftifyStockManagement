import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Product } from 'src/app/_models/Products';
import { SelectComboTwo } from 'src/app/_services/SelectComboTwo';
import { TableData } from 'src/app/_services/TableData';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  formData: Product;
  list: Product[];
  supplierList: SelectComboTwo[];
  unitList: SelectComboTwo[];
  tableData: TableData[];
  readonly rootURL = environment.apiUrl + 'Product/';

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  postItem(model: any) {
   return this.http.post(this.rootURL + 'ProductSave', model );
  }

  getDataList() {
    this.http.get(this.rootURL + 'GetProductList').subscribe(response => {
      this.list = response as Product[];
      console.log(this.list);
    }, error => {
      this.alertify.error(error);
    });
  }
  getCombo() {
    this.http.get(this.rootURL + 'GetProductCombo').subscribe(response => {
      // this.supplierList = response[0] as SelectComboTwo[];
      this.supplierList  = response["Table1"] as SelectComboTwo[];
      this.unitList  = response["Table"] as SelectComboTwo[];
      console.log(response["Table1"]);
    }, error => {
      console.log(error);
    });
  }
  // getCombo() {
  //   this.http.get(this.rootURL + 'GetProductCombo')
  //   .toPromise().then(res => this.supplierList = res as SelectComboTwo[]);
  //   console.log(this.list);
  // }

  putItem(formData: Product) {
    return this.http.put(this.rootURL + 'ProductUpdate/' + formData.ProductId, formData);
   }

   deleteItem(id: number) {
    return this.http.delete(this.rootURL + 'ProductDelete/' + id);
   }

}
