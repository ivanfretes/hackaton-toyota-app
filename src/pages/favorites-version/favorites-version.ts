import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ReviewInLocalProvider } from '../../providers/review/review-local';

import { imageWsPath } from '../../mocks/api-config';

@IonicPage({
  name : 'favorites-version-page'
})
@Component({
  selector: 'page-favorites-version',
  templateUrl: 'favorites-version.html',
})
export class FavoritesVersionPage {

  // Modelos favoritos
  modelos : any[];
  imagePath = imageWsPath;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private reviewLocal : ReviewInLocalProvider
    ) {
  }

  ionViewDidLoad() {
    this.getFavorites();
  }


  // Retorna el listado de favoritos
  // Optimizar webservice, debe retornar el listado de favoritos por usuario
  getFavorites(){
    /*this.api.get(`favorites`).subscribe(res => {
      this.favorites = res.body;
    });*/

    this.reviewLocal.getAll().then(res => {
      this.modelos = res;
    });
  }

}
