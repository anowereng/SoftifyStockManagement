import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopbarComponent } from './shared/layout/topbar.component';
import { FooterComponent } from './shared/layout/footer.component';
import { SidebarComponent } from './shared/layout/sidebar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './_services/login.service';
import {  ErrorInterceptorProvider } from './_services/error.interceptor';
import { AuthGuard } from './_guard/auth.guard';
import { CustomerService } from './_services/customer.service';
import { AlertifyService } from './_services/alertify.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, TopbarComponent, SidebarComponent,
     DashboardComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/login']
      }
    })
  ],
  providers: [
    LoginService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
