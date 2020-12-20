import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CountryService} from '../../../services/country.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Country} from '../../../entities/country';


@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  country: Country;
  selectedId: number;

  countryUpdateForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      continent: new FormControl('', [Validators.required]),
      mainLanguage: new FormControl('', [Validators.required]),
      currencyCode: new FormControl('', [Validators.required]),
      population: new FormControl('', [Validators.required, Validators.max(2147483647)]),

    }
  );


  constructor(private countryService: CountryService, private router: Router, private route: ActivatedRoute) { }

  loadData(): void {
    this.countryService.get(this.selectedId).subscribe((res) => {
      this.country = res;
    });
  }


  onSubmit(): void {
    // console.log(this.countryForm.value);
    this.countryService.update(this.selectedId, this.countryUpdateForm.value).subscribe(data => {
      console.log('success');
    });
    this.countryUpdateForm.reset();
  }


  ngOnInit(): void {
    this.country = new Country();
    this.route.paramMap.subscribe(  (params) => {
      this.selectedId =  + params.get('id');
      this.loadData();
    });
  }

}
