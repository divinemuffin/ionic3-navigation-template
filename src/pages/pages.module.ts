import { NgModule } from '@angular/core';

import { Tab1Module } from "./tab1/tab1.module";
import { SearchPageModule } from "./search/search.module";
import { NotificationsPageModule } from './notifications/notifications.module';
import { SavedPageModule } from './saved/saved.module';
import { MenuPageModule } from './menu-tab-page/menu-page.module';
import { AuthPageModule } from './auth/auth.module';

import { RewardsPageModule } from './rewards/rewards.module';

import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
    declarations: [
        
    ],
    imports: [
        SearchPageModule,
        Tab1Module,
        NotificationsPageModule,
        SavedPageModule,
        MenuPageModule,
        
        AuthPageModule,
        RewardsPageModule,

        SuperTabsModule
    ]    
  })
  export class PagesModule {}
