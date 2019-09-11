import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
/* components */

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './shared/topbar.component';
import { SidebarComponent } from './shared/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { FooterComponent } from './shared/footer.component';

export function tokenGetter( ) {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
         tokenGetter: tokenGetter,
         whitelistedDomains: ['localhost:5000'],
         blacklistedRoutes: ['localhost:5000/api/login']
      }
   })
  ],
  declarations: [
    AppComponent, LoginComponent, TopbarComponent, SidebarComponent, DashboardComponent,FooterComponent
  ],
  providers: [ ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
