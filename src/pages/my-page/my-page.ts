import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { MyData } from '.../pages/tabs/my-data'


@Component({
  selector: 'page-my-page',
  templateUrl: 'my-page.html',
  providers:[]
})
export class MyPage {
  public title:string;
  constructor() {

    this.title="new title";
  }

  ionViewDidLoad() {
    console.log('Hello MyPage Page');
  }

  public getdata()
  {

    alert("safsdgfdsg")

;
  }

}
