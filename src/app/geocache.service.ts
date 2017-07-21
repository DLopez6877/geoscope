import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Cache } from './cache.model';
import { geoKey } from './api-keys';

@Injectable()
export class GeocacheService {
  cacheList: FirebaseListObservable<any[]>;

  constructor(private http: Http, private database: AngularFireDatabase) {
    this.cacheList = database.list('cacheList');
  }

  getCacheList () {
    return this.cacheList;
  }

  getCacheById(cacheId: string) {
     return this.database.object('cacheList/' + cacheId);
  }

  getCoordinates(physicalAddress: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + physicalAddress + "&key=" + geoKey);
  }

  getPhysicalAddress(lat: string, lng: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng);
  }

  addCache(newCache: Cache) {
    this.cacheList.push(newCache);
  }

  updateCache(localUpdatedCache){
    var cacheEntryInFirebase = this.getCacheById(localUpdatedCache.$key);
    cacheEntryInFirebase.update({creator: localUpdatedCache.creator,
                                address: localUpdatedCache.address,
                                lat: localUpdatedCache.lat,
                                lon: localUpdatedCache.long,
                                hint: localUpdatedCache.hint});
  }

  deleteCache(localCacheToDelete){
    var cacheEntryInFirebase = this.getCacheById(localCacheToDelete.$key);
    cacheEntryInFirebase.remove();
  }

}
