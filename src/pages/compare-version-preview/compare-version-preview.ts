import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage({
  name : 'compare-preview-page'
})
@Component({
  selector: 'page-compare-version-preview',
  templateUrl: 'compare-version-preview.html',
})
export class CompareVersionPreviewPage {
  currentCompare : any[] = [];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompareVersionPreviewPage');
  }


  /**
   * Visualiza el filtro para comparar, y anaexar la version
   */
  viewFiltroComparadorModal(){
    let modal = this.modalCtrl.create('compare-vehicle-filtro');
    modal.present();
  }

}
