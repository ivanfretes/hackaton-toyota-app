import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  'name' : 'ficha-tecnica-full'
})
@Component({
  selector: 'page-ficha-tecnica-full',
  templateUrl: 'ficha-tecnica-full.html',
})
export class FichaTecnicaFullPage {
  version = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl : ViewController) {
    this.version = this.navParams.get('version');
    console.log(this.version);
  }


  dismiss(){
    this.viewCtrl.dismiss();
  }

}
