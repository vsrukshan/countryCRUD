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
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      continent: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      mainLanguage: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      currencyCode: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      population: new FormControl('', [Validators.required, Validators.max(2147483647), Validators.pattern(/^[0-9]*$/)]),

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
    this.countryService.add(this.countryForm.value).subscribe(
      (response) => {
      window.alert(`Country "${response.name}" added successfully `),
        (error) => {
        window.alert(`operation failed ${error}`);
        };
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
