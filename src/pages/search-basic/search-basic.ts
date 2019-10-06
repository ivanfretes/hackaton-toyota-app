import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController, ModalController, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

import { imageWsPath } from '../../mocks/api-config';
import { ReviewInLocalProvider } from '../../providers/review/review-local';

@IonicPage({
  name : 'search-basic-page'
})
@Component({
  selector: 'page-search-basic',
  templateUrl: 'search-basic.html',
})
export class SearchBasicPage {
  searchValue : string = '';
  modelos : any[] = [];
  imagePath = imageWsPath;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api : ApiProvider,
    public loadingCtrl : LoadingController,
    public viewCtrl : ViewController,
    public modalCtrl : ModalController,
    private reviewLocal : ReviewInLocalProvider,
    public toastCtrl : ToastController
    ) {
      console.log(this.modelos.length);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBasicPage');
  }


  getRemoteSearch(){
    let searchValue = this.searchValue.trim();
    if (searchValue != ''){
      let loader = this.loadingCtrl.create({
        content : 'Buscando',
        duration: 2000
      })
      loader.present();

      this.api.get('search?q='+searchValue).subscribe(res => {
        this.modelos = res.body.data;
        console.log(this.modelos.length);
      });
    }
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

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
