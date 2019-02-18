import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

export interface PageInterface {
  title: string;
  tabPageName?: string;    // name of the tab page for child page display; If this page is a tab's children then pageName = 'TabPage' else pageName is undefined
  component: any;          // name of page component class. Every page should have unique component name
  tabId?: number;          // parameter that defines id of a tab where page will be loaded
  icon?:string;
  subItems?: Array<Object>;
  params?: any;
  opened?: boolean;
}

@IonicPage()
@Component({
  selector: 'menu-page',
  templateUrl: 'menu-page.html',
})
export class MenuPage {
  username:string;
  userInfo;
  unreadMessages: number;

  pages: PageInterface[] = [
    { title: "Featured", component: "MainTabsPage", tabId: 0, icon: "dealcentive-featured" },
    { title: "Offers", component: "", icon: "basket", subItems: [
      {title: "Featured Categories", component: "MainTabsPage", tabId: 0, params: {is_featured: true}},
      {title: "View All", component: "MainTabsPage", tabId: 0, params: {is_featured: false}}
    ], opened: false},
    { title: "Rewards", component: "RewardsPage", icon: "cash"},
    { title: "Reports", component: "", icon: "paper", subItems: [
      // {title: "My Leads", component: "LeadsPage"},
      // {title: "Posted Content", component: "PostedContentPage"},
      // {title: "Points Assignments", component: "PointsPage"},
      // {title: "Claimed Prizes", component: "ClaimedRewardsPage"},
    ], opened: false},
    { title: "Notifications", component: "MainTabsPage", tabId: 2, icon: "notifications" },
    { title: "Profile", icon: "person", tabPageName: "MainTabsPage", component: "ProfilePage", params: {userInfo: this.userInfo}},
    { title: "Search", component: "MainTabsPage", tabId: 1, icon: "search"},
    { title: "Saved", component: "MainTabsPage", tabId: 3, icon: "heart" },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if (localStorage.profile) {
      this.userInfo = JSON.parse(localStorage.profile);
      this.username = this.getUserData(JSON.parse(localStorage.profile));
    }
  }

  getUserData({first_name, last_name}) {
    if(first_name && last_name ) {
      return `${first_name} ${last_name}`
    }
  }

  openPage(page: PageInterface, event?: any) {
    if (page.hasOwnProperty("opened")) {
      page.opened = !page.opened;
    }

    if (page.component) {
      try {
        if (page.tabId != undefined) {
          if (page.params && this.navCtrl.parent) {
            this.navCtrl.parent.rootParams = page.params;
          }
          this.navCtrl.parent.slideTo(page.tabId);
        }
        else this.navCtrl.push(page.component, page.params);
      } 
      catch(error) {
        console.error(">> [TEMPLATE]: Navigation error ", error);
      }
    }
  }

}
