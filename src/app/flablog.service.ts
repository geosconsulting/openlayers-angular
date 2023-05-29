import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProvincesPeopleAtRisk } from './provinces-people-at-risk';

@Injectable({
  providedIn: 'root'
})
export class FlablogService {

  private url = 'https://fabiolana.cloud/api/floods_emdat/Nicaragua'

  constructor(private http: HttpClient) {
    this.getProvinces();
  }

  getProvinces(): Observable<ProvincesPeopleAtRisk[]> {
    return this.http.get<ProvincesPeopleAtRisk[]>(this.url);
  }

}
