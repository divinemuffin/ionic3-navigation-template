import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Device } from '@ionic-native/device';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { PagesModule } from '../pages/pages.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { LoadingProvider } from '../providers/loading/loading';
import { HttpClientModule } from '@angular/common/http';

import { SidebarModule } from "../components/sidebar/sidebar.module"


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),

    PagesModule,
    SidebarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    LoadingProvider,
    Device,
    InAppBrowser,
  ]
})
export class AppModule {}
