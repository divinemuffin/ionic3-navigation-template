import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  @Input() authTexts: Object = {};
  @Input() phoneModel: string;
  @ViewChild("phoneInput") phoneInput: ElementRef;

  /* ok, if you have some api methods to check for user in DB go to api provider and
   * set link to them. Otherwise pressing "next" button will just throw you directly
   * to all the app pages
  */
  TEMPLATE_NO_API = true;

  public mask = ['+','1',' ','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public api: ApiProvider,
    ) { }

  setFocusOnField(){
    // this is kinda stupid workarount for Android phones having problem with focus
    // try to use it without setTimeout(). Just might work with new Ionic or Android
    setTimeout(() =>  this.phoneInput.nativeElement.focus())
  }

  autoLogin() {
    this.navCtrl.setRoot('SidebarComponent');
  }
  checkUserData() {
    // this is where you send user data (phone) to your backend
  }
}