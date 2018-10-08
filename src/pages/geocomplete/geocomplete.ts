import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the GeocompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geocomplete',
  templateUrl: 'geocomplete.html',
})
export class GeocompletePage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeocompletePage');
  }


  autoCompleteCallback1(selectedData:any) {
    //do any necessery stuff.
    console.log(selectedData)
    this.viewCtrl.dismiss(selectedData);
    
}



}
