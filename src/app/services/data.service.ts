import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }
getAlbums() {
  return this.http.get ('http://jsonplaceholder.typicode.com/albums')
  .map(res => res.json());
}
}
