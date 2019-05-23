import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';

const productsRoutes: Routes = [
	{ path: 'product-create', component: ProductCreateComponent },
	{ path: 'product-list', component: ProductListComponent }
]

@NgModule({
	imports: [RouterModule.forChild(productsRoutes)],
	exports: [RouterModule]
})
 export class ProductRoutingModule { }
