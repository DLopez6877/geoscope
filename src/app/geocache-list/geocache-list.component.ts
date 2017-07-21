import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response} from '@angular/http';

import { GeocacheService } from './../geocache.service';
import { Cache } from './../cache.model';

@Component({
  selector: 'app-geocache-list',
  templateUrl: './geocache-list.component.html',
  styleUrls: ['./geocache-list.component.scss'],
  providers: [GeocacheService]
})
export class GeocacheListComponent implements OnInit {
  cacheList;
  address;
  isActive: boolean = false;
  gpsActive: boolean = false;

  constructor(
    private geocacheService: GeocacheService,
    private router: Router,
    private http: Http,
  ) { }

  ngOnInit() {
    this.cacheList = this.geocacheService.getCacheList();
  }

  toggleActive() {
    if (this.isActive) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }

  toggleGpsActive() {
    if (this.gpsActive) {
      this.gpsActive = false;
    } else {
      this.gpsActive = true;
    }
  }

  submitForm(creator: string, address: string, lat: number, lon: number, hint: string) {
      var newCache: Cache = new Cache(creator, address, lat, lon, hint);
      this.geocacheService.addCache(newCache);
    }

  getLocation(lat: string, lng: string){
    this.geocacheService.getPhysicalAddress(lat, lng).subscribe(res => {
     this.address = res.json().results[0].formatted_address;
   })
  }

}
