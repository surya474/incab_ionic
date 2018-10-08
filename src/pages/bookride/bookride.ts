import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  driverdata=this.navParams.get('driverdata')
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
