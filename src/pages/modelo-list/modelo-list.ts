import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { ApiProvider }  from '../../providers/api/api';
//import { IMarca } from '../../models/marca-model';
import { imageWsPath } from '../../mocks/api-config';
import { ReviewInLocalProvider } from '../../providers/review/review-local';
//import { IModelo } from '../../models/modelo-model';



@IonicPage({
  name : 'modelo-list-page'
})
@Component({
  selector: 'page-modelo-list',
  templateUrl: 'modelo-list.html',
})
export class ModeloListPage {
  imagePath = imageWsPath;
  marca  = null; // 
  modelos  = [];
  titleHeader : string = ''; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api: ApiProvider,
    private reviewLocal : ReviewInLocalProvider,
    public modalCtrl : ModalController,
    public toastCtrl : ToastController
  ) {
    this.marca = this.navParams.get('marca-data');
  }

  ionViewDidLoad() {
    this.getModelos();
  }

  // Llama al listado de modelos de una determinada marca
  getModelos(){
    if (undefined != this.marca){
      let marcaId = this.marca.brand_id;
      this.api.get(`brands/${marcaId}/vehicles`).subscribe(res => {
        this.modelos = res.body.data;
      });
    }
  }

  // Visualiza el detalle de un modelo
  viewModeloDetailPage(modelo : any){
    let modalCtrl = this.modalCtrl.create(
      'modelo-detail-page',{
      'marca-data' : this.marca,
      'modelo-data' : modelo
    });
    modalCtrl.present();
  }

  // Genera/Anexa una versión Favorita
  addVersionToFavorites(modelo : any){
    this.reviewLocal.unshift(modelo).then(res => {
      if (res){
        let toast = this.toastCtrl.create({
          message: 'Modelo se agrego a favorito',
          duration: 3000
        });
        toast.present();    
      }
    });
  }

  viewSearchBasicPage(){
    let modal = this.modalCtrl.create('search-basic-page');
    modal.present();
  }


}
