import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@IonicPage()
@Component({
  selector: 'page-main-tabs',
  templateUrl: 'main-tabs.html',
})
export class MainTabsPage {
  @ViewChild("SuperTabs") superTabs: SuperTabsController;

  myIndex: number;
  userInfo;

  tab1 = 'Tab1';
  tab2 = 'SearchPage';
  tab3 = 'NotificationsPage';
  tab4 = 'SavedPage';
  tab5 = 'MenuPage';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
  ) {
    this.myIndex = navParams.data.tabId || 0;
  }
}
