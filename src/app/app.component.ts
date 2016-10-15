import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

// import { TabsPage } from '../pages/tabs/tabs';
import { MyData } from '../pages/tabs/my-data'

// import { AboutPage} from '../pages/about/about';

import { LoginPage} from '../pages/login/login'
import { SearchCityService } from '../pages/searchcity/searchcityservice'

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers:[MyData,SearchCityService]
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
