import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GeocacheService } from './../geocache.service';

@Component({
  selector: 'app-geocache-list',
  templateUrl: './geocache-list.component.html',
  styleUrls: ['./geocache-list.component.scss'],
  providers: [GeocacheService]
})
export class GeocacheListComponent implements OnInit {
  cacheList;

  constructor(
    private GeocacheService: GeocacheService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cacheList = this.GeocacheService.getCacheList();
  }

}
