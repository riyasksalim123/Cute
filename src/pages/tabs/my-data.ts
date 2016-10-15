import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyData {

  private data:any;

  constructor(public http: Http) {
    console.log('Hello MyData Provider');
  }

  public getData()
  {
    this.http.get('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo')
      .map(res => res.json())
      .subscribe( (data) =>  {
        this.data = data;
      }),error =>  this.data = <any>error;

    return JSON.stringify(this.data);

    // this.http.get('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo')
    //   .map( (responseData) => {
    //     return responseData.json();
    //   })
      // .map((tasks: Array<any>) => {
      //   let result = [];
      //   if (tasks) {
      //     tasks.forEach((task) => {
      //       result.push(
      //        task
      //         // new data(task.id,
      //         //   task.description,
      //         //   task.dueDate,
      //         //   task.complete));
      //     });
      //   }
      //   return result;
      // });
  }



}
