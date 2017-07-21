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
  lat;
  lon;
  isActive: boolean = false;
  gpsActive: boolean = false;
  currentRoute: string = this.router.url;

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

  goToDetailPage(clickedCache) {
      this.router.navigate(['cacheList', clickedCache.$key]);
  };

  getGps(physicalAddress: string) {
    this.geocacheService.getCoordinates(physicalAddress).subscribe(res => {
      this.lat = res.json().results[0].geometry.location.lat;
      this.lon = res.json().results[0].geometry.location.lng;
    });
  }

  getLocation(lat: string, lng: string){
    this.geocacheService.getPhysicalAddress(lat, lng).subscribe(res => {
      this.address = res.json().results[0].formatted_address;
    });
  }

  submitForm(creator: string, address: string, lat: number, lon: number, hint: string) {
    var newCache: Cache = new Cache(creator, address, lat, lon, hint);
    this.geocacheService.addCache(newCache);
  }


}
