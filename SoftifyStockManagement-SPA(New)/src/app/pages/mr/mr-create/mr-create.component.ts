import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { MrService } from '../mr.service';
import { MR } from 'src/app/_models/MR';
import { Select2OptionData } from 'ng2-select2';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';

@Component({
  selector: 'app-mr-create',
  templateUrl: './mr-create.component.html',
  styleUrls: ['./mr-create.component.css']
})
export class MrCreateComponent implements OnInit {
  mrEntryForm: FormGroup;
  model: MR; items: FormArray;
  constructor(private fb: FormBuilder, private alertify: AlertifyService, public prodService: MrService) { }
  public selected: string;
  
  ngOnInit() {
    this.prodService.getCombo();
    this.mrEntryForm = this.fb.group({
      dtMr: new FormControl(new Date(), Validators.required),
      SupplierId: new FormControl('3', Validators.required),
      dtLoading: new FormControl(new Date(), Validators.required),
      BinId: new FormControl('', Validators.required),
      Remarks: new FormControl(''),
      // mrSubList: this.fb.array([
      //   this.fb.group({point:''})
      // ])
      // mrSubList: this.buildServiceList()

      // mrSubList: this.fb.group({
      //   ProdcutId: new FormControl('ertertert', Validators.required),
      //   UnitId: new FormControl('', Validators.required),
      //   SellPrice: new FormControl('', Validators.required),
      //   CostPrice: new FormControl('', Validators.required),
      // })
      items: this.fb.array([ this.createItem() ])
      // mrSubList: this.fb.array([this.fb.group({ProdcutId:''})])

    });
    // this.mrEntryForm.controls['dtMr '].setValue('Jun 15, 2015, 9:43:11 PM');
  }
  createItem(): FormGroup {
    return this.fb.group({
      ProductId: ['', Validators.required],
      UnitId: ['', Validators.required],
      Price: ['', Validators.required],
      Qty: ['', Validators.required],
    });
  }

  addItem(): void {
    this.items = this.mrEntryForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  CreateMr() {
   console.log(this.mrEntryForm.value);
  //   this.model = Object.assign({}, this.mrEntryForm.value);
  //   this.model.MrId = 0;
  //   if (this.mrEntryForm.valid) {
  //     this.prodService.postItem(this.model).subscribe(
  //       () => {
  //         this.alertify.success('Record saved Successfully');
  //         this.mrEntryForm.reset();
  //       }, error => {
  //         console.log(error);
  //         this.alertify.error(error);
  //       });
  // }

  }

}
