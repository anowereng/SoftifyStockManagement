import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MrCreateComponent } from './mr-create/mr-create.component';
import { MrListComponent } from './mr-list/mr-list.component';
import { MrEntryComponent } from './mr-entry/mr-entry.component';

const mrRoutes: Routes = [
	{ path: 'mr-create', component: MrCreateComponent },
	{ path: 'mr-list', component: MrListComponent },
	{ path: 'mr-entry', component: MrEntryComponent }
]

@NgModule({
	imports: [RouterModule.forChild(mrRoutes)],
	exports: [RouterModule]
})
 export class MrRoutingModule { }
