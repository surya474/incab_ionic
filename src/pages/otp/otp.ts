import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {Firebase} from '@ionic-native/firebase';
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  verification_id: any;
  otp:string='';
  constructor(public navCtrl: NavController, private api: ApiProvider,public navParams: NavParams) {
    this.verification_id = this.navParams.get('verificationid');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }

  roleSelection() {
    this.api.presentLoader('Verifying your OTP');
    var signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verification_id,this.otp);
    firebase.auth().signInWithCredential(signInCredential).then(()=>{    
      console.log(signInCredential);
      setTimeout(()=>{
        this.api.dismissLoader();
        this.api.presentToast('OTP Verified');
      },2000);
      this.navCtrl.setRoot('HomePage');
    }).catch(()=>{
      this.api.dismissLoader();
      this.api.presentSimplesAlert('OTP Failed','Failed to verify OTP');
      console.log('Erorr in OTP');
    });
    
  }
}
