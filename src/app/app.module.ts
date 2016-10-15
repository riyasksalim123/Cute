import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AboutPage1 } from '../pages/providers/my-request'
import { MyPage } from '../pages/my-page/my-page';
import {SearchcityPage } from '../pages/searchcity/searchcity';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AboutPage1,
    MyPage,
    SearchcityPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AboutPage1,
    MyPage,
    SearchcityPage
  ],

  providers: []
})
export class AppModule {}
