import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopbarComponent } from './shared/layout/topbar.component';
import { FooterComponent } from './shared/layout/footer.component';
import { SidebarComponent } from './shared/layout/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
