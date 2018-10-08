import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import {Firebase} from '@ionic-native/firebase';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-phonelogin',
  templateUrl: 'phonelogin.html',
})
export class PhoneloginPage {

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  verificationId: any = '';
  phoneNumber: any = '';
  countryCode: any = '';
  result: any;
  constructor(public navCtrl: NavController,private api: ApiProvider, public navParams: NavParams, private alertCtrl: AlertController,public firebase: Firebase) {
  }
  
  ionViewDidLoad() {
   
  }

  OtpScreen() {
    this.countryCode = '+' + this.phoneNumber.substring(0, 2);
    this.phoneNumber = this.phoneNumber.substring(2, 13);
    console.log(this.countryCode, this.phoneNumber); 
  }

  signIn2(){
    this.navCtrl.push('RegisterPage',{
      Mobile_Number:this.phoneNumber
    })
  }
}
