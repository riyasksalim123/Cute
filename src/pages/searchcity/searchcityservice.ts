import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchCityService {

  //private data:any;

  constructor(public http: Http) {
    console.log('Hello MyData Provider');
  }
  public test(){
    return "test";
  }
}
