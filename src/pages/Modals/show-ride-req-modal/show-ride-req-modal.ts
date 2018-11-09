import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Renderer } from '@angular/core';
import {   ViewController } from 'ionic-angular';
/**
 * Generated class for the ShowRideReqModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-ride-req-modal',
  templateUrl: 'show-ride-req-modal.html',
})
export class ShowRideReqModalPage {

  constructor(public renderer: Renderer, public viewCtrl: ViewController) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'page-show-ride-req-modal', true);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowRideReqModalPage');
  }

}
