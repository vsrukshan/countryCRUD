import { Component, OnInit } from '@angular/core';
import {Country} from '../../../entities/country';
import {CountryService} from '../../../services/country.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {

  countries: Country[];

  constructor(private counterService: CountryService) { }

  displayedColumns: string[] = ['name', 'continent', 'currencyCode', 'mainLanguage', ' '];

  ngOnInit(): void {
    this.countries = this.counterService.getAll();
  }

}
