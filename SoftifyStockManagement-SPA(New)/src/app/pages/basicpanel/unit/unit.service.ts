import { Injectable } from '@angular/core';
import { Unit } from 'src/app/_models/Unit';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertifyService } from 'src/app/_services/alertify.service';
@Injectable({
  providedIn: 'root'
})
export class UnitService {
  formData: Unit;
  list: Unit[];
  readonly rootURL = environment.apiUrl + 'BasicSettings/';

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  postItem(model: any) {
   return this.http.post(this.rootURL + 'UnitSave', model );
  }

  getDataList() {
    this.http.get(this.rootURL + 'GetUnitList').subscribe(response => {
      this.list = response as Unit[];
      console.log(this.list);
    }, error => {
      this.alertify.error(error);
    });
  }



  putItem(formData: Unit) {
    return this.http.put(this.rootURL + 'UnitUpdate/' + formData.UnitId, formData);
   }

   deleteItem(id: number) {
    return this.http.delete(this.rootURL + 'UnitDelete/' + id);
   }

}
