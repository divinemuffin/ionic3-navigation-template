import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// this is page with three classes included in one component.
// navigation goes from class to class just to not multiply folders.

@Component({
  templateUrl: 'sub2.html',
})
export class Sub2 {
  constructor(private params: NavParams) {}
  reward:object;
  gift = this.params.data.item;
}

@Component({
  templateUrl: 'sub1.html',
})
export class Sub1 {
  company = this.params.data.item;
  gifts = [
    { id: 1, title:"G1", points: 100, image: "some_image.jpg"}
   ];

  constructor(public navCtrl: NavController, private params: NavParams) { }
  
  openNavDetailsPage(selectedGift){
    this.navCtrl.push(Sub2, { item: selectedGift, company_points: this.company.points });
  }
}

@IonicPage()
@Component({
  selector: 'page-rewards',
  templateUrl: 'rewards.html',
})
export class RewardsPage {

  companies = {
    list: [
      { id: 1, title: "Microsoft", points: 20.1 },
      { id: 2, title: "Shell", points: 2.2 },
      { id: 3, title: "ViewSonic", points: 47.5 },
      { id: 4, title: "HP", points: 12 },
      { id: 5, title: "Sega", points: 43.1 }
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  openNavDetailsPage(selected) {
    this.navCtrl.push(Sub1, { item: selected });
  }

}
