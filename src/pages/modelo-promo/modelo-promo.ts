import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ReviewInLocalProvider } from '../../providers/review/review-local';
import { ApiProvider } from '../../providers/api/api';
import { imageWsPath } from '../../mocks/api-config';

@IonicPage({
  name : 'modelo-promo-page'
})
@Component({
  selector: 'page-modelo-promo',
  templateUrl: 'modelo-promo.html',
})
export class ModeloPromoPage {
  modelos = [];
  imagePath = imageWsPath;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api : ApiProvider,
    private reviewLocal : ReviewInLocalProvider,
    public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    this.api.get(`promos`).subscribe(res => {
        this.modelos = res.body.data;
    });
    console.log('ionViewDidLoad ModeloPromoPage');
  }

  viewSearchBasicPage(){
    let modal = this.modalCtrl.create('search-basic-page');
    modal.present();
  }

  addVersionToFavorites(modelo : any){
    this.reviewLocal.unshift(modelo).then(res => {
      console.log(res);
    });
  }


    // Visualiza el detalle de un modelo
  viewModeloDetailPage(modelo : any){
    let modalCtrl = this.modalCtrl.create(
      'modelo-detail-page',{
      'marca-data' : modelo.brand,
      'modelo-data' : modelo
    });
    modalCtrl.present();
  }


}
