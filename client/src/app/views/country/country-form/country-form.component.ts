import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CountryService} from '../../../services/country.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent implements OnInit {

  countryForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      continent: new FormControl('', [Validators.required]),
      mainLanguage: new FormControl('', [Validators.required]),
      currencyCode: new FormControl('', [Validators.required]),
      population: new FormControl('', [Validators.required, Validators.max(2147483647)]),

    }
  );


  constructor(private countryService: CountryService, private router: Router) { }

  onSubmit(): void {
    // console.log(this.countryForm.value);
    this.countryService.add(this.countryForm.value).subscribe(data => {
      console.log('success');
    });
    this.formReset();
  }

  onCancel(): void {
    this.formReset();
  }

  formReset(): void {
    this.countryForm.reset();
  }


  ngOnInit(): void {
  }

}
