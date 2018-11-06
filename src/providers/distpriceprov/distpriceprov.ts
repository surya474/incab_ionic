import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Globalvalues} from '../../globalValues'
/*
  Generated class for the DistpriceprovProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DistpriceprovProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DistpriceprovProvider Provider');
  }


  getDistance(data){

return new Promise(resolve=>{
  this.http.post(Globalvalues.apisList.getDistance,data).subscribe((res):any=>{
       resolve(res)
  })
})


  }

  getRidePrice(data){
    return new Promise(resolve=>{
      this.http.post(Globalvalues.apisList.getRidePrice,data).subscribe((res):any=>{
        resolve(res)
   })
    })
  }

}
