import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public prodService: ProductService) { }
  private gridApi;
  columnDefs = [
    { headerName: 'Prod.Id', field: 'ProductId', width: 100, filter: 'agNumberColumnFilter'},
    { headerName: 'ProductName', field: 'ProductName', width: 150, filter: 'agTextColumnFilter'},
    { headerName: 'Qty', field: 'Qty', width: 100, filter: 'agNumberColumnFilter' },
    { headerName: 'SupplierName', field: 'SupplierName', width: 150},
    { headerName: 'Unit', field: 'UnitName', width: 100},
    { headerName: 'Sell Price', field: 'SellPrice', width: 100},
    { headerName: 'CostPrice', field: 'CostPrice', width: 100},
  ];

  ngOnInit() {
    this.prodService.getDataList();
  }

}
