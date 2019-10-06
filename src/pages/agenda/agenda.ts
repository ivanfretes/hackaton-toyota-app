import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { imageWsPath } from '../../mocks/api-config';

@IonicPage({
  name : 'agenda-page'
})
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  agendas = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api : ApiProvider,
    public modalCtrl : ModalController
  ) {
  }

  ionViewDidLoad() {
    this.api.get(`agenda-cita`).subscribe(res => {
        this.agendas = res.body.data;
    });
    console.log('ionViewDidLoad ModeloPromoPage');
  }
  

  viewSearchBasicPage(){
    let modal = this.modalCtrl.create('search-basic-page');
    modal.present();
  }

  
  nuevaAgenda(){
    let modal = this.modalCtrl.create('search-basic-page');
    modal.present();
  }

}
