import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cache } from '../cache.model';
import { GeocacheService } from './../geocache.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cache-detail',
  templateUrl: './cache-detail.component.html',
  styleUrls: ['./cache-detail.component.scss'],
  providers: [GeocacheService]
})
export class CacheDetailComponent implements OnInit {
  cacheId: string;
  cacheToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private geocacheService: GeocacheService
  ) { }

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.cacheId = urlParameters['id'];
    });

    this.cacheToDisplay = this.geocacheService.getCacheById(this.cacheId);
  }

}
