import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  userInfo: any = {};
  loading:boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }
}
