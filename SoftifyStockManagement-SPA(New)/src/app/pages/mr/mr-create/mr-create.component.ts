import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { MrService } from '../mr.service';
import { MR } from 'src/app/_models/MR';

@Component({
  selector: 'app-mr-create',
  templateUrl: './mr-create.component.html',
  styleUrls: ['./mr-create.component.css']
})
export class MrCreateComponent implements OnInit {
  mrEntryForm: FormGroup;
  model: MR
  constructor(private fb: FormBuilder, private alertify: AlertifyService, public prodService: MrService) { }

  ngOnInit() {
    this.prodService.getCombo();
    this.mrEntryForm = this.fb.group({
      dtMr: new FormControl(new Date(), Validators.required),
      SupplierId: new FormControl('', Validators.required),
      dtLoading: new FormControl('', Validators.required),
      Remarks: new FormControl('')
    });
  }


  CreateMr() {
  //  console.log(this.productEntryForm.value);
    this.model = Object.assign({}, this.mrEntryForm.value);
    this.model.MrId = 0;
    if (this.mrEntryForm.valid) {
      this.prodService.postItem(this.model).subscribe(
        () => {
          this.alertify.success('Record saved Successfully');
          this.mrEntryForm.reset();
        }, error => {
          console.log(error);
          this.alertify.error(error);
        });
  }

  }

}
