
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guard/auth.guard';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
{
  path: 'pages',
   runGuardsAndResolvers: 'always',
  canActivate: [AuthGuard],
  children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
      { path: 'basic', loadChildren: './pages/basicpanel/basicpanel.module#BasicPanelModule' },
      { path: 'product', loadChildren: './pages/product/product.module#ProductModule' },
  ]
}  ,
{ path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




