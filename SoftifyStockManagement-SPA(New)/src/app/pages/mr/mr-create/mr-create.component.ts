import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { MrService } from '../mr.service';
import { MR } from 'src/app/_models/MR';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-mr-create',
  templateUrl: './mr-create.component.html',
  styleUrls: ['./mr-create.component.css']
})
export class MrCreateComponent implements OnInit {
  mrEntryForm: FormGroup;
  model: MR; public exampleData: Array<Select2OptionData>;
  constructor(private fb: FormBuilder, private alertify: AlertifyService, public prodService: MrService) { }
  public selected: string;
  ngOnInit() {
    this.prodService.getCombo();
    this.mrEntryForm = this.fb.group({
      dtMr: new FormControl('', Validators.required),
      SupplierId: new FormControl('3', Validators.required),
      dtLoading: new FormControl('', Validators.required),
      BinId: new FormControl('', Validators.required),
      Remarks: new FormControl('')
    });

    this.exampleData = [
      {
        id: '1',
        text: 'Basic 1'
      },
      {
        id: '2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: '3',
        text: 'Basic 3'
      },
      {
        id: '4',
        text: 'Basic 4'
      }
    ];
  }

  public changed(e: any): void {
    // this.mrEntryForm.controls.SupplierId = e.value;
    // this.mrEntryForm.controls.SupplierId.setValue(e.value);
    return e.value;
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
