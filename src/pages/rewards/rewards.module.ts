import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RewardsPage, Sub1, Sub2 } from './rewards';

@NgModule({
  declarations: [
    RewardsPage,
    Sub1,
    Sub2
  ],
  imports: [
    IonicPageModule.forChild(RewardsPage),
  ],
  entryComponents: [
    Sub1,
    Sub2
  ]
})
export class RewardsPageModule {}
