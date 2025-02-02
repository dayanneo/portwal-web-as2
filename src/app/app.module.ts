import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaDataComponent } from './factura-data/factura-data.component';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    FacturaDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
