import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Globalvalues} from '../../globalValues'
/*
  Generated class for the LoginProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvProvider {
  apiList=Globalvalues.apisList
   headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  
  constructor(public http: HttpClient) {
    console.log('Hello LoginProvProvider Provider');
  }

registerUser(data){
return new Promise(resolve=>{         
  this.http.post(this.apiList.register,data).subscribe(res=>{
  resolve(res)
  })
})
}

checkUser(data){
  console.log("in provider",data)
  return new Promise(resolve=>{
    this.http.post(this.apiList.checkUser,data).subscribe(res=>{
      console.log("in res ",res)
      resolve(res)
      })
  })
}

getDriverData(data){
  console.log("in provider",data)
  return new Promise(resolve=>{
    this.http.post(this.apiList.checkUser,data).subscribe(res=>{
      console.log("in res ",res)
      resolve(res)
      })
  })
}
}
