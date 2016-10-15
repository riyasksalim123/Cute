import { Component } from '@angular/core';

import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MyData} from './my-data';
import {SearchCityService } from '../searchcity/searchcityservice'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  // tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(private dat:MyData,private _SearchCityService:SearchCityService) {


  }
  public test(){
   alert(this.dat.getData()) ;

  }
  public test2(){
    alert(this._SearchCityService.test());
  }
}
