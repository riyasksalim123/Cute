import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'pager-about',
  template:`<ion-header>
  <ion-navbar color="dark">
    <ion-title>Dark</ion-title>
  </ion-navbar>
</ion-header>`


})
export class AboutPage1 {
  // static get parameters() {
  //   return [[Http]];
  // }
  public title = 'Tour of Heroes';
// private data:any;
  // private error:any;
  constructor(public navCtrl: NavController,private http:Http,private toastCtrl:ToastController

  )
  {
    //this.prompt();


    //this.hero.name="sdfgsdg"
  }

  public test():any

  {
  //   var url = 'https://jsonplaceholder.typicode.com/posts/1';
  // let res= this.http.get(url)
  //   .map(res => res.json())
  //   .subscribe(
  //     (data) => this.data = data,
  //     (err) => this.data = err
  //
  //
  //
  //   ); // Reach here if fails
  //
  //
  //
  //  return res;

  }

  public presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
}

