import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'pager-about',
  template:`<ng-content></ng-content> {{title}}`


})
export class AboutPage1 {
  // static get parameters() {
  //   return [[Http]];
  // }
  public title = 'Tour of Heroes';
private data:any;
  private error:any;
  constructor(public navCtrl: NavController,private http:Http

  )
  {
    //this.prompt();


    //this.hero.name="sdfgsdg"
  }

  public test():any

  {
    var url = 'https://jsonplaceholder.typicode.com/posts/1';
  let res= this.http.get(url)
    .map(res => res.json())
    .subscribe(
      (data) => this.data = data,
      (err) => this.data = err



    ); // Reach here if fails



   return res;
    // this.PopupCntrl.Confirmalert();
  }


}
