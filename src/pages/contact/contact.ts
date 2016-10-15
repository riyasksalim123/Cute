
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import {AboutPage1 } from '../providers/my-request';
import { AboutPage } from '../about/about';
// import { MyPage } from '../my-page/my-page';

 import { SearchcityPage } from '../searchcity/searchcity';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [AboutPage,AboutPage1,SearchcityPage]
})



export class ContactPage {
  //
  // public service:MyRequest;
  constructor(public navCtrl: NavController,public aboutPage:AboutPage,public service:AboutPage1,public serch:SearchcityPage) {

 // this.service.get();
  }

  public test(){
 // alert(this.aboutPage.test());
    //let data=this.service.test();
   // alert(JSON.stringify(this.service.test()));
  //   alert(this.d.get());
   // console.log(this.servicess.SAMPLEURL);
    this.service.presentToast();
  }

  public search(){

  }

  public navigate(){
    this.navCtrl.push(SearchcityPage);
  }



}
