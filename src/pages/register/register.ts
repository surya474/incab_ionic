import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '../../../node_modules/@angular/forms';
import { LoginProvProvider } from '../../providers/login-prov/login-prov';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
register:FormGroup
  constructor(public loginProv:LoginProvProvider,public fb:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
 
    this.register=this.fb.group({
      First_Name:['',Validators.required],
      Last_Name:[''],
      email:['',Validators.email]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUer(data){
this.loginProv.registerUser(data).then(res=>{
  console.log(res)
})
  }   
}
