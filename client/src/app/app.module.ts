import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialComponentModule} from './material-component/material-component.module';
import { CountryFormComponent } from './views/country/country-form/country-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CountryTableComponent } from './views/country/country-table/country-table.component';
import { UpdateFormComponent } from './views/country/update-form/update-form.component';
import { CountryDetailComponent } from './views/country/country-detail/country-detail.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NotFoundComponent } from './views/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryFormComponent,
    CountryTableComponent,
    UpdateFormComponent,
    CountryDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
