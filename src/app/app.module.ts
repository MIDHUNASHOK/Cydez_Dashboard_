
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ActionTableComponent } from './action-table/action-table.component';
import { ActionSummaryComponent } from './action-summary/action-summary.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionTableComponent,
    ActionSummaryComponent

    
  ],
  imports: [
    BrowserModule,
  
    HttpClientModule ,// Add HttpClientModule here
   
    AppRoutingModule,
    FormsModule, // Add FormsModule
    NgChartsModule,
    
    
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
