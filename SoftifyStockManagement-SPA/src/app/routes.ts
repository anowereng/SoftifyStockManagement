import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guard/auth.guard';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '', runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            // { path: 'member-list', component: MemberListComponent },
            // { path: 'messages', component: MessagesComponent },
            // { path: 'customer-list', component: CustomerListComponent },
            // { path: 'customer-list/:id', component: CustomerDetailsComponent },
        ]
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },

    // { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    // { path: 'login', component: LoginComponent },
    // { path: '**', redirectTo: '' }
];
