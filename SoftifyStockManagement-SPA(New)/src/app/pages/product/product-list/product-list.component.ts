import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CustomcellComponent } from './customcell/customcell.component';
import { ButtonRendererComponent } from '../../../_template/button-RendererComponent';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  frameworkComponents: any; rowDataClicked1 = {}; rowDataClicked2 = {};
  constructor(public prodService: ProductService, private fb: FormBuilder, ) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }
  public gridApi;
  public columnApi; productEntryForm: FormGroup;
  column = [
    { headerName: 'Prod.Id', field: 'ProductId', width: 50, filter: 'agNumberColumnFilter' },
    { headerName: 'ProductName', field: 'ProductName', width: 150, filter: 'agTextColumnFilter' },
    { headerName: 'Qty', field: 'Qty', width: 100, filter: 'agNumberColumnFilter' },
    { headerName: 'SupplierName', field: 'SupplierName', width: 150 },
    { headerName: 'Unit', field: 'UnitName', width: 100 },
    { headerName: 'Sell Price', field: 'SellPrice', width: 100 },
    { headerName: 'CostPrice', field: 'CostPrice', width: 100 },
    {
      headerName: 'Action', width: 60, 
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Edit'
      }
    },
    {
      cellRenderer: 'buttonRenderer', width: 60, 
      cellRendererParams: {
        onClick: this.onBtnClick2.bind(this),
        label: 'Delete'
      }
    }
  ];
  drop(params) {
    console.log(params);
    //alert(params)
  }
  ngOnInit() {
    this.prodService.getDataList();
    this.productEntryForm = this.fb.group({
      ProductName: new FormControl('', Validators.required),
      SupplierId: new FormControl('', Validators.required),
      SellPrice: new FormControl('', Validators.required),
      CostPrice: new FormControl('', Validators.required),
      Currency: new FormControl(''),
      UnitId: new FormControl(1, Validators.required),
    });
  }
  OnGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }
  rowAdd() {
    this.gridApi.updateRowData({ add: [{ ProductId: 260, ProductName: '', Qty: 50, SupplierName: 'anower', UnitName: 'PCS', SellPrice: 500, CostPrice: 200 }] })
  }

  clear() {
    this.gridApi.setRowData([]);
  }
  rowUpdate() {
    var rowNode = this.gridApi.getRowNode(1);
    rowNode.setData({ ProductId: 260, ProductName: '', Qty: 50, SupplierName: 'anower', UnitName: 'PCS', SellPrice: 500, CostPrice: 200 })
  }
  newData() {
    this.gridApi.setRowData([{ ProductId: 260, ProductName: '', Qty: 50, SupplierName: 'anower', UnitName: 'PCS', SellPrice: 500, CostPrice: 200 }]);
  }
  cellUpdate() {
    var rowNode = this.gridApi.getRowNode(1);
    rowNode.setDataValue("ProductName", "Bangladesh")
  }
  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
  }
  onBtnClick2(e) {
    this.rowDataClicked2 = e.rowData;
  }
  CreateProduct(){
    console.log('hi');
  }
}
