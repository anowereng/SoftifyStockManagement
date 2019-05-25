import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { SelectItem} from 'primeng/api';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { environment } from 'src/environments/environment';
import { ConfirmationService} from 'primeng/api';
import { Product } from 'src/app/_models/Products';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  baseUrl = environment.apiUrl + 'BasicSettings/';
  productEntryForm: FormGroup;
  options: SelectItem[];
  products: Product;
  constructor( private fb: FormBuilder, private alertify: AlertifyService, public prodService: ProductService ,
               public confirmService: ConfirmationService) { }

  ngOnInit() {
    this.prodService.getCombo();
    this.productEntryForm = this.fb.group({
      ProductName: new FormControl('', Validators.required),
      SupplierId: new FormControl('', Validators.required),
      SellPrice: new FormControl('', Validators.required),
      CostPrice: new FormControl('', Validators.required),
      Currency: new FormControl(''),
      UnitId: new FormControl(1, Validators.required),
    });
}

CreateProduct() {
//  console.log(this.productEntryForm.value);
  this.products = Object.assign({}, this.productEntryForm.value);
  this.products.ProductId = 0;
  if (this.productEntryForm.valid) {
    this.prodService.postItem(this.products).subscribe(
      () => {
        this.alertify.success('Record saved Successfully');
        this.productEntryForm.reset();
      }, error => {
        console.log(error);
        this.alertify.error(error);
      });
}

}

}
