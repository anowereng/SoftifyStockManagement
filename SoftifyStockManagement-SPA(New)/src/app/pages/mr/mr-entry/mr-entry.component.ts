import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { MrService } from '../mr.service';
import { MR } from 'src/app/_models/MR';
import { Select2OptionData } from 'ng2-select2';
import { ComboTwo } from 'src/app/_services/ComboTwo';
@Component({
  selector: 'app-mr-entry',
  templateUrl: './mr-entry.component.html',
  styleUrls: ['./mr-entry.component.css']
})
export class MrEntryComponent implements OnInit {

  constructor(private fb: FormBuilder, private alertify: AlertifyService, public mrService: MrService) { }
  mrEntryForms: FormGroup;
  items: FormArray; public exampleData: ComboTwo[];
  model: MR;
  ngOnInit() {
    this.mrService.getCombo();
    this.mrEntryForms = this.fb.group({
      dtMr: new FormControl(new Date(), Validators.required),
      SupplierId: new FormControl('', Validators.required),
      dtLoading: new FormControl(new Date(), Validators.required),
      Remarks: new FormControl(''),
      // mrSubData: this.fb.array([
      //   this.mrSubForms()
      // ])
      items: this.fb.array([ this.createItem() ])
    });
 
  }

  CreateMr() {
    console.log(this.mrEntryForms.value);
    this.model = Object.assign({}, this.mrEntryForms.value);
    this.model.MrId = 0;
    if (this.mrEntryForms.valid) {
       this.mrService.postItem(this.model).subscribe(
         () => {
           this.alertify.success('Record saved Successfully');
           this.mrEntryForms.reset();
         }, error => {
           console.log(error);
           this.alertify.error(error);
         });
   }
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
    this.items = this.mrEntryForms.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  public changed(e: any): void {
    // this.mrEntryForm.controls.SupplierId = e.value;
    // this.mrEntryForm.controls.SupplierId.setValue(e.value);
    return e.value;
  }

}
