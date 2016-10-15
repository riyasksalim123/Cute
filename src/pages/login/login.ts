import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AlertController,ToastController } from 'ionic-angular';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private toastCtrl: ToastController)
  {
    this.prompt();
    setInterval(function(){

      this.toaster();
     }, 3000);

  }

  toaster(){
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  };

  ionViewDidLoad() {
    console.log('Hello Login Page');


  }


    pos:number;

  getPosition()
  {
    navigator.geolocation.getCurrentPosition((position) => {

      this.pos = position.coords.latitude;
      alert(this.pos);

    })
  };



  public prompt()
  {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
            this.getPosition();
          }
        },
        {
          text: 'Login',
          handler: data => {
            // if (User.isValid(data.username, data.password)) {
            //   // logged in!
            // } else {
            //   // invalid login
            //   return false;
            // }
          }
        }
      ],
      cssClass:'custom-alert'

    });
    alert.present();
  }

}
