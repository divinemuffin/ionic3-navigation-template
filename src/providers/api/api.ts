// This is provider for API usage. 
// If you have no backend servers, local API methods, don't like imp;ementation
// you can just delete this file and it's dependencies and ignore hours of my work

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingProvider } from '../loading/loading';

import 'rxjs/Rx';

interface IParameters {
  action: string,
  access_token?: string
}

@Injectable()
export class ApiProvider {
  constructor(public http: HttpClient, private loading: LoadingProvider) {
  }

  API_URL = "https://api.YOURSERVER.WEB.com/index.php?m=api";   // link to do requests to

  parameters: IParameters = {
    action: "getconfirmationcode" // method that returns conf. code for authorisation
  };
  
  invokeMethod(method: string, customParams?: object, processMsg:any = false) {
    // for each api method
    let params:any = this.parameters;
    params.action = method;

    if (customParams) {
      params = {...params, ...customParams};
    }
    if (typeof(processMsg) === "string" && processMsg.length >= 0) this.loading.showLoading(processMsg);
    let request = this.http.get(this.API_URL, { 
      observe: 'response',
      params: {request: JSON.stringify(params)}
    }).map(data => {
      return data.body;
    });
    if (this.loading.loading) this.loading.hideLoading(this.loading.loading);
    return request;
  } 
}
