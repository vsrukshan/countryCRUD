import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
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


  get name(): AbstractControl | null {
    return this.countryForm.get('name');
  }
  get continent(): AbstractControl | null {
    return this.countryForm.get('continent');
  }
  get mainLanguage(): AbstractControl | null {
    return this.countryForm.get('mainLanguage');
  }
  get currencyCode(): AbstractControl | null {
    return this.countryForm.get('currencyCode');
  }
  get population(): AbstractControl | null {
    return this.countryForm.get('population');
  }


  onSubmit(): void {
    // console.log(this.countryForm.value);
    this.countryService.add(this.countryForm.value).subscribe(() => {
      console.log('success');
    });
    this.formReset();
  }

  onCancel(): void {
    this.formReset();
    this.router.navigateByUrl('').then();
  }

  formReset(): void {
    this.countryForm.reset();
  }


  ngOnInit(): void {
  }

}
