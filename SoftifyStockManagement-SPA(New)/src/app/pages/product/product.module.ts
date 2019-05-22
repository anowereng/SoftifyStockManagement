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

import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    PanelModule, DropdownModule, InputTextModule, InputTextareaModule, ButtonModule, TableModule, DataTableModule, ConfirmDialogModule
  ],
  providers: [ConfirmationService]
})
export class ProductModule { }
