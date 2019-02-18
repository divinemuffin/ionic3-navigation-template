import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'AuthPage';

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
  ) {

    if(platform.is('android')) {
      statusBar.styleBlackOpaque();
    }

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      console.log("console.log works well");
    }

    platform.ready().then(() => {
      splashScreen.hide();
    });
  }

}

