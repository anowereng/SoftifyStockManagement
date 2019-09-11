/* Common Module */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  BasicPanelRoutingModule } from './basic-panel-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
/* Service */
import { LoginService } from 'src/app/_services/login.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthGuard } from 'src/app/_guard/auth.guard';
import { ErrorInterceptorProvider } from 'src/app/_services/error.interceptor';
/*  Prime NG Module   */
import {  PanelModule, DataTableModule, ConfirmationService } from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

/* All Component here.. */
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { DemoComponent } from './demo/demo.component';
import { UnitComponent } from './unit/unit.component';
import { BinComponent } from './bin/bin.component';
import { BasicPanelComponent } from './basic-panel.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BasicPanelRoutingModule,
    PanelModule, DropdownModule, InputTextModule, InputTextareaModule, ButtonModule, TableModule, DataTableModule, ConfirmDialogModule
  ],
  declarations: [
   RegisterComponent,
   UserComponent,
   SupplierComponent,
   CategoryComponent,
   BasicPanelComponent,
   SubcategoryComponent, DemoComponent, UnitComponent, BinComponent
  ],
  providers: [LoginService, AlertifyService, AuthGuard, ErrorInterceptorProvider, ConfirmationService]
})
export class BasicPanelModule { }
