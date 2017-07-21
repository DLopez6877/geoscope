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

  beginUpdatingCache(cacheToUpdate){
    this.geocacheService.updateCache(cacheToUpdate);
  }

  beginDeletingCache(cacheToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.geocacheService.deleteCache(cacheToDelete);
    }
  }

}
