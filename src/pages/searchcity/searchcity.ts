import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SearchCityService } from './searchcityservice'

@Component({
  selector: 'page-searchcity',
  templateUrl: 'searchcity.html'
})
export class SearchcityPage {

  constructor(public navCtrl: NavController,public _SearchCityService:SearchCityService) {


  }

  ionViewDidLoad() {
    console.log('Hello Searchcity Page');

  }

}
