import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {  BasicPanelRoutingModule } from './basic-panel-routing.module';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { LoginService } from 'src/app/_services/login.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthGuard } from 'src/app/_guard/auth.guard';
import { SupplierComponent } from './supplier/supplier.component';
import { HotTableModule } from '@handsontable/angular';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ErrorInterceptorProvider } from 'src/app/_services/error.interceptor';
import { SharedModule, PanelModule } from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BasicPanelRoutingModule,
    HotTableModule.forRoot(), PanelModule, DropdownModule
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
