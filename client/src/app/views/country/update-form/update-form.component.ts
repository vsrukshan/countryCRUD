import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
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

  get name(): AbstractControl | null {
    return this.countryUpdateForm.get('name');
  }
  get continent(): AbstractControl | null {
    return this.countryUpdateForm.get('continent');
  }
  get mainLanguage(): AbstractControl | null {
    return this.countryUpdateForm.get('mainLanguage');
  }
  get currencyCode(): AbstractControl | null {
    return this.countryUpdateForm.get('currencyCode');
  }
  get population(): AbstractControl | null {
    return this.countryUpdateForm.get('population');
  }

  loadData(): void {
    this.countryService.get(this.selectedId).subscribe((res) => {
      this.country = res;
    });
  }


  onSubmit(): void {
    // console.log(this.countryForm.value);
    this.countryService.update(this.selectedId, this.countryUpdateForm.value).subscribe(() => {
      console.log('success');
    });
    this.formReset();
  }

  onCancel(): void {
    this.formReset();
    this.router.navigateByUrl('').then();
  }

  formReset(): void {
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
