import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name : 'compare-list-page'
})
@Component({
  selector: 'page-compare-list',
  templateUrl: 'compare-list.html',
})
export class CompareListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompareListPage');
  }

}
