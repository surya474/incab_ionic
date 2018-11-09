import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Globalvalues} from '../../globalValues'
/*
  Generated class for the ConfirmrideProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfirmrideProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConfirmrideProvider Provider');
  }


  confirmRide(data){
    return new Promise(resolve=>{
      this.http.post(Globalvalues.apisList.confirmRide,data).subscribe((res):any=>{
        resolve(res)     
   })
    })
  }
}
