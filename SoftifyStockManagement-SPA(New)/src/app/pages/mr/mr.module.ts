/* Common Module */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/*  Prime NG Module   */
import {  PanelModule, DataTableModule, ConfirmationService } from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { AgGridModule } from 'ag-grid-angular';
import { MrRoutingModule } from './mr-routing.module';
import { MrCreateComponent } from './mr-create/mr-create.component';
import { MrListComponent } from './mr-list/mr-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Select2Module } from 'ng2-select2';
import { MrEntryComponent } from './mr-entry/mr-entry.component';
@NgModule({
  declarations: [
    MrCreateComponent, MrListComponent, MrEntryComponent
  ],
  imports: [
    CommonModule,
    MrRoutingModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule, AgGridModule.withComponents([]), Select2Module,
    PanelModule, DropdownModule, InputTextModule, InputTextareaModule, ButtonModule, TableModule, DataTableModule, ConfirmDialogModule
  ]
})
export class MrModule { }
