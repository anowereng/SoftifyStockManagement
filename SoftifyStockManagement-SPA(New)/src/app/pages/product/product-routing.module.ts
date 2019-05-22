import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';

const productsRoutes: Routes = [
	{ path: 'product-create', component: ProductCreateComponent }
]

@NgModule({
	imports: [RouterModule.forChild(productsRoutes)],
	exports: [RouterModule]
})
 export class ProductRoutingModule { }
