import { Component, OnInit } from '@angular/core';
import {Country} from '../../../entities/country';
import {CountryService} from '../../../services/country.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CountryFormComponent} from '../country-form/country-form.component';
import {UpdateFormComponent} from '../update-form/update-form.component';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {

  countries: Country[];

  constructor(private counterService: CountryService, private router: Router, private dialog: MatDialog) { }

  displayedColumns: string[] = ['name', 'continent', 'currencyCode', 'mainLanguage', ' '];

  ngOnInit(): void {
    this.countries = this.counterService.getAll();
  }

  onclickDelete(country): void {
    const confirmation = window.confirm(`Do you really want to delete country "${country.name} ?"`);
    if (confirmation) {
      this.counterService.delete(country.id).subscribe(() => {
        window.alert(`The country "${country.name} was deleted."`);
      });

    }
  }

  onClickAddBtn(): void {
    this.router.navigateByUrl('/form').then();
  }



}
