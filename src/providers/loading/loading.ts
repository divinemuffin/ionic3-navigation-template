import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

// this is class that allows to show loader popup.
// easy to call just one method showLoading() prior to
// process start and then hide it with hideLoading();

@Injectable()
export class LoadingProvider {
  loading: any;

  constructor(private loadingCtrl: LoadingController) {
  }

  createLoader(message: string = "Please wait...") {
    this.loading = this.loadingCtrl.create({
      content: message
    });
  }

  public showLoading(message?:string) {
    this.createLoader(message);
    this.loading.present().then(() => { 
      // you can also add code here
    });

  }
  
  public hideLoading(loader) {
    console.log(loader);
    if(loader && loader.dismiss()){
      loader.dismiss().catch((error) => {
        console.error(">> [TEMPLATE] Loading error: ", error);
      });
    }
  }

}
