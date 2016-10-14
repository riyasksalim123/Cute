import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',


})
export class AboutPage {

  constructor(public navCtrl: NavController,
              )
  {
    //this.prompt();


    //this.hero.name="sdfgsdg"
  }

  public test()
  {
return "this is a test";
  // this.PopupCntrl.Confirmalert();
  }


}
