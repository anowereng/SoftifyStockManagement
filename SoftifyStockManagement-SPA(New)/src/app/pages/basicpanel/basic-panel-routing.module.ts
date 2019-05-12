import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';


const basicPanelRoutes: Routes = [
	{ path: 'user', component: UserComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'supplier', component: SupplierComponent },
	{ path: 'category', component: CategoryComponent },
	{ path: 'subcategory', component: SubcategoryComponent },
];

@NgModule({
	imports: [RouterModule.forChild(basicPanelRoutes)],
	exports: [RouterModule]
})
 export class BasicPanelRoutingModule { }
