import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryTableComponent} from './views/country/country-table/country-table.component';
import {CountryFormComponent} from './views/country/country-form/country-form.component';

const routes: Routes = [
  {path: 'form', component: CountryFormComponent},
  {path: '', component: CountryTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
