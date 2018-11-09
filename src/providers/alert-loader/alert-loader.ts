import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the AlertLoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/    
@Injectable()
export class AlertLoaderProvider {
loading:any
  constructor(public loader:LoadingController,public http: HttpClient) {
    console.log('Hello AlertLoaderProvider Provider');
  }
               
showLoader(data){

  this.loading = this.loader.create({
    content: data  
  });
    
  this.loading.present();
}

        
closeLoader(){
  this.loading.dismiss()
}   
}
