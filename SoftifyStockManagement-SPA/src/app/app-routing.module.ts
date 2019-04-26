
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
