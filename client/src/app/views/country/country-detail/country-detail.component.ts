import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../../services/country.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Country} from '../../../entities/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  id: number;
  country: Country;

  constructor(private countryService: CountryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.country = new Country();
    this.id = this.route.snapshot.params.id;
    this.countryService.get(this.id).subscribe(res => {
      this.country = res;
    });
  }

}
