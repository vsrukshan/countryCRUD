import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialComponentModule} from './material-component/material-component.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CountryFormComponent } from './views/country/country-form/country-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CountryTableComponent } from './views/country/country-table/country-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryFormComponent,
    CountryTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }