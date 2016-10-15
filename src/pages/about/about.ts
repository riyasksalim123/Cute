import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',


})
export class AboutPage {

  constructor(public navCtrl: NavController)
  {



  }

  public test()
  {

    alert("this is my test");
     return "this is a test";

  }



}
