import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }
  getBrandList() {
    return this.http.get(environment.beerCraftUrl);
  }

  getBrandImages() {
    return this.http.get(environment.beerimageUrl);
  }
}
