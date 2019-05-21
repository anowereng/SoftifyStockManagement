import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { DemoComponent } from './demo/demo.component';
import { UnitComponent } from './unit/unit.component';
import { BinComponent } from './bin/bin.component';


const basicPanelRoutes: Routes = [
	{ path: 'user', component: UserComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'supplier', component: SupplierComponent },
	{ path: 'category', component: CategoryComponent },
	{ path: 'subcategory', component: SubcategoryComponent },
	{ path: 'demo', component: DemoComponent },
	{ path: 'unit', component: UnitComponent },
	{ path: 'bin', component: BinComponent },
];

@NgModule({
	imports: [RouterModule.forChild(basicPanelRoutes)],
	exports: [RouterModule]
})
 export class BasicPanelRoutingModule { }
