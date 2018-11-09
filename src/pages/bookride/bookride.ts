import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvProvider } from '../../providers/login-prov/login-prov';

/**
 * Generated class for the BookridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookride',
  templateUrl: 'bookride.html',
})
export class BookridePage {
  state: any;
  card: any;
  paymentType: any;
  cardnumber: any;
driverdata={}
  showDriver=false
  tripdata=this.navParams.get('data')  
  constructor(public loginprov:LoginProvProvider,public navCtrl: NavController, public navParams: NavParams) {
   console.log("driver data",this.tripdata)   
   let data={
    Mobile_Number:this.tripdata.Mobile_Number
   }
   this.loginprov.getDriverData(data).then((res:any)=>{
    this.showDriver=true
   if(res.success){
    this.driverdata=res.Data
   }   

   })
 
  }

  





  ionViewDidLoad() {
    console.log('ionViewDidLoad BookridePage');
  }
  gotoCard(){

  }
  updatePayment(){

  }
  
  submit(){
    alert('Your ride complete thank you')
    this.navCtrl.setRoot('HomePage')
  }

}
