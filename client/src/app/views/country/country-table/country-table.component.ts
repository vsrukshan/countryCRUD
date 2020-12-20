import { Component, OnInit } from '@angular/core';
import {Country} from '../../../entities/country';
import {CountryService} from '../../../services/country.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {

  countries: Country[];

  constructor(private counterService: CountryService, private router: Router) { }

  displayedColumns: string[] = ['name', 'continent', 'currencyCode', 'mainLanguage', ' '];

  ngOnInit(): void {
    this.refreshData();
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

  refreshData(): void {
    this.counterService.getAll().subscribe(res => {
      this.countries = res;
    });
  }

}
