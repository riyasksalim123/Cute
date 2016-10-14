import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import {AboutPage1 } from '../providers/my-request'

import { AboutPage } from '../about/about'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [AboutPage,AboutPage1]

})

export class ContactPage {
  //
  // public service:MyRequest;
  constructor(public navCtrl: NavController,public aboutPage:AboutPage, public service:AboutPage1) {

 // this.service.get();
  }

  public test(){
 // alert(this.aboutPage.test());
    //let data=this.service.test();
    alert(JSON.stringify(this.service.test()));
  //   alert(this.d.get());
  }

  public search(){

  }





}
