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
  longitude: number;
  latitude: number;
  mapUrl: string;
  countryName: string;

  constructor(private countryService: CountryService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.country = new Country();
    this.id = this.route.snapshot.params.id;
    this.countryService.get(this.id).subscribe(res => {
      this.country = res;
      this.countryName = res.name.replace(/\s/g, '');
      this.countryService.getGeo(this.countryName).subscribe((data) => {
        const code = data.features[0].center;
        this.longitude = code[0];
        this.latitude = code[1];
        this.mapUrl = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/${this.longitude},${this.latitude},3,0/500x500?access_token=pk.eyJ1IjoidnNydWtzaGFuIiwiYSI6ImNraXhnbzAwdTNlZzkzM3AzbTl2b2EwemcifQ.YaEW5LvrUuqy-himnmcCSQ`;
      });
    });

  }

}
