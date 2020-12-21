import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryTableComponent} from './views/country/country-table/country-table.component';
import {CountryFormComponent} from './views/country/country-form/country-form.component';
import {UpdateFormComponent} from './views/country/update-form/update-form.component';
import {CountryDetailComponent} from './views/country/country-detail/country-detail.component';
import {NotFoundComponent} from './views/not-found/not-found.component';

const routes: Routes = [
  {path: 'country/:id', component: CountryDetailComponent},
  {path: 'edit/:id', component: UpdateFormComponent},
  {path: 'form', component: CountryFormComponent},
  {path: '', component: CountryTableComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
