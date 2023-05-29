import { Component } from '@angular/core';
import { ProvincesPeopleAtRisk } from '../provinces-people-at-risk';
import { FlablogService } from '../flablog.service';

@Component({
  selector: 'app-provinces-list',
  templateUrl: './provinces-list.component.html',
  styleUrls: ['./provinces-list.component.css']
})

export class ProvincesListComponent {

  provinces: ProvincesPeopleAtRisk[] = [];

  constructor(private provincesService: FlablogService){ this.getProvinces() }

  getProvinces() {
    this.provincesService.getProvinces().subscribe(
    (res: ProvincesPeopleAtRisk[]) => {
      this.provinces = res;
    },
    (err) => {
      console.error(err);
    }
    );
}
}

