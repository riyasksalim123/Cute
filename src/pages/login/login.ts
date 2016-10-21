import { Component,Injectable, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AlertController,ToastController } from 'ionic-angular';
import {BackgroundMode ,Geolocation, Geoposition, BackgroundGeolocation} from 'ionic-native';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/filter';
@Injectable()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              public back:BackgroundMode,
              public platform:Platform,
              public zone: NgZone)
  {
     this.prompt();
     this.toaster();
     this.startTracking();

  }

  public watch: any;
  public lat: number = 0;
  public lng: number = 0;



  startTracking() {
    alert('BackgroundGeolocation:');
    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true,
      interval: 2000
    };

    BackgroundGeolocation.configure((location) => {

      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
      alert('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
      });

    }, (err) => {

      console.log(err);
      alert(JSON.stringify(err));

    }, config);

    // Turn ON the background-geolocation system.
    BackgroundGeolocation.start();


    // Foreground Tracking

    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = Geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

      console.log(position);
      alert(JSON.stringify(position));
      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

      });

    });
  }

  stopTracking() {
    console.log('stopTracking');
      alert('stopTracking');
    BackgroundGeolocation.finish();
    this.watch.unsubscribe();

  }

  public tester(){
 // this.stopTracking();
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


    pos:number;

  getPosition()
  {
    // navigator.geolocation.getCurrentPosition((position) => {
    //
    //   this.pos = position.coords.latitude;
    //   alert(this.pos);
    //
    // })
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
