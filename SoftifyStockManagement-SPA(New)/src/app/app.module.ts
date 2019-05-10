import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* components */

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './shared/topbar.component';
import { SidebarComponent } from './shared/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent, LoginComponent, TopbarComponent, SidebarComponent, DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
