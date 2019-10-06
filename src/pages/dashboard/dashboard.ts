import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage({
  name : 'dashboard-page'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  
  // Opcion Seleccionada del Menú
  optionMenuSelected : string = 'segmentos';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }


  viewSearchBasicPage(){
    let modal = this.modalCtrl.create('search-basic-page');
    modal.present();
  }

}
