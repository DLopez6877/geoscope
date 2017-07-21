import { Component, Input, OnInit } from '@angular/core';
import { GeocacheService } from '../geocache.service';

@Component({
  selector: 'app-edit-cache',
  templateUrl: './edit-cache.component.html',
  styleUrls: ['./edit-cache.component.scss'],
  providers: [GeocacheService]
})
export class EditCacheComponent implements OnInit {
  @Input() selectedCache;

  constructor(private geocacheService: GeocacheService) { }

  ngOnInit() {
  }

}
