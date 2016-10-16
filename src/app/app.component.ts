import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { MyData } from '../pages/tabs/my-data'
import { LoginPage} from '../pages/login/login'
import { SearchCityService } from '../pages/searchcity/searchcityservice'
import {CommonServices} from "../providers/common-services";

@Component({
  template: `<ion-nav  [root]="rootPage"></ion-nav>`,
  providers:[MyData,SearchCityService,CommonServices]
})
export class MyApp {
 // rootPage = TabsPage;
  rootPage=LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
     // alert("platform ready");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
