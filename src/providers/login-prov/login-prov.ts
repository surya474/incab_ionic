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
   headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  
  constructor(public http: HttpClient) {
    console.log('Hello LoginProvProvider Provider');
  }

registerUser(data){
return new Promise(resolve=>{   
  this.http.post(Globalvalues.apisList.register,this.headers).subscribe(res=>{
  resolve(res)
  })
})
}

}
