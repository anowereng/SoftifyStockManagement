/* Common Module */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  BasicPanelRoutingModule } from './basic-panel-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
/* Service */
import { LoginService } from 'src/app/_services/login.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthGuard } from 'src/app/_guard/auth.guard';
/*  Prime NG Module   */
import {  PanelModule, DataTableModule } from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
/* All Component here.. */
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ErrorInterceptorProvider } from 'src/app/_services/error.interceptor';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BasicPanelRoutingModule,
    PanelModule, DropdownModule, InputTextModule, InputTextareaModule, ButtonModule, TableModule, DataTableModule
  ],
  declarations: [
   RegisterComponent,
   UserComponent,
   SupplierComponent,
   CategoryComponent,
   SubcategoryComponent
  ],
  providers: [LoginService, AlertifyService, AuthGuard, ErrorInterceptorProvider]
})
export class BasicPanelModule { }
