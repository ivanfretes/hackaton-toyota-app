import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ApiProvider }  from '../../providers/api/api';
import { ISegmento } from '../../models/segmento-model';
import { IMarca } from '../../models/marca-model';
import { imageWsPath } from '../../mocks/api-config';

@IonicPage({
  name : 'marca-list-page'
})
@Component({
  selector: 'marca-list-page',
  templateUrl: 'marca-list.html',
})
export class MarcaListPage {
  segmento : ISegmento;
  marcas = []; //IMarca[]
  imagePath = imageWsPath;
  next_page = 1;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api : ApiProvider,
    public modalCtrl : ModalController
  ) {
    this.getSegmento();
    
  }

  ionViewDidLoad() {
    this.getMarcas();
  }

  /**
   * Obtiene en segmento seleccionado
   */
  getSegmento(){
    this.segmento = this.navParams.get('segmento-selected');
  }

  /**
   * Obtiene todas las marcas que pertecen a un segmento, caso contrario
   * visualiza todoas las marcas
   */
  getMarcas(){  
    if (undefined != this.segmento ){
      let segmento_id = this.segmento['segmento_id'];
      this.api.get(`categories/${segmento_id}/brands`).subscribe(res => {
        this.marcas = res.body;
      });
    }
    else {
      this.api.get(`brands`).subscribe(res => {
        this.marcas = res.body;
      });
    }
  }


  // Actualiza el listado de marcas, en caso que el usuario desee visualizar mas marcas
  setListMarcas(pageNumber: number){
    this.next_page++;
    this.api.get(`brands?page=${this.next_page}`).subscribe(res => {
      this.marcas.push(res.body.data);
    });
  }

  // Visualiza el listado de modelos por una marca
  viewModeloListPage(marca : IMarca){
    this.navCtrl.push('modelo-list-page',{
      'marca-data' : marca
    });
  } 

  viewSearchBasicPage(){
    let modal = this.modalCtrl.create('search-basic-page');
    modal.present();
  }

}
