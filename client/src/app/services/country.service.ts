import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../entities/country';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private rootUrl = 'http://localhost:8080/rest/v2';

  constructor(private http: HttpClient) { }

  get(id: number): any {
    return this.http.get(`${this.rootUrl}/${id}`);
  }

  getAll(): any {
    return this.http.get(`${this.rootUrl}`);
  }

  update(id: number, country: Country): any {
    return this.http.put(`${this.rootUrl}`, country);
  }

  add(country: Country): any {
    return this.http.post(`${this.rootUrl}`, country);
  }

  delete(id: number): any {
    return this.http.delete(`${this.rootUrl}/${id}`);
  }

}
