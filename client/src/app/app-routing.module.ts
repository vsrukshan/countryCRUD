import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryTableComponent} from './views/country/country-table/country-table.component';
import {CountryFormComponent} from './views/country/country-form/country-form.component';
import {UpdateFormComponent} from './views/country/update-form/update-form.component';

const routes: Routes = [
  {path: 'edit/:id', component: UpdateFormComponent},
  {path: 'form', component: CountryFormComponent},
  {path: '', component: CountryTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
