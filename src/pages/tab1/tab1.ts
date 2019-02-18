import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-featured',
  templateUrl: 'tab1.html',
})
export class Tab1 {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) { }

  // if error occures, I usually pass message to this variable
  occuredErrorMessage:string = "";

  ionViewDidEnter() {
    console.log('ionViewDidEnter TAB1');  
  }

  doRefresh(refresher?) {
    // replace timeout with Promise or something ...
    setTimeout(() => {
      if(refresher) refresher.complete();
    }, 2000);
  }
}
