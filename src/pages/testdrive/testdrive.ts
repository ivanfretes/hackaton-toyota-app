import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name : 'testdrive-page'
})
@Component({
  selector: 'page-testdrive',
  templateUrl: 'testdrive.html',
})
export class TestdrivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestdrivePage');
  }

}
