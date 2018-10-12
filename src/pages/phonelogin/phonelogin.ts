import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import {Firebase} from '@ionic-native/firebase';
import { ApiProvider } from '../../providers/api/api';
import { LoginProvProvider } from '../../providers/login-prov/login-prov';


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
  constructor(public loginProv:LoginProvProvider,public navCtrl: NavController,private api: ApiProvider, public navParams: NavParams, private alertCtrl: AlertController,public firebase: Firebase) {
    
  }
  
  ionViewDidLoad() {
   
  }

  OtpScreen() {
    this.countryCode = '+' + this.phoneNumber.substring(0, 2);
    this.phoneNumber = this.phoneNumber.substring(2, 13);
    console.log(this.countryCode, this.phoneNumber); 
  }    

  signIn2(phoneNumber){  
    console.log(phoneNumber)   
  let req={
    Mobile_Number:this.phoneNumber
  }
     this.loginProv.checkUser(req).then((res:any)=>{
localStorage.setItem("isloggedIn","true")
localStorage.setItem("Mobile_Number",this.phoneNumber)
      if(res.success){   
       if(res.docExists){
         localStorage.setItem("uid",res.Data._id)  
         this.navCtrl.setRoot('HomePage')   
       }
       else{
        this.navCtrl.push('RegisterPage',{
          Mobile_Number:this.phoneNumber
        })
       }
      }

      else{

      }
     })
   
  }
}
