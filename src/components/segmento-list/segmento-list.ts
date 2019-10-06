import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';

import { segmento_list_mock } from '../../mocks/segmento-list-mock';
import { ISegmento } from '../../models/segmento-model';

@Component({
  selector: 'segmento-list-component',
  templateUrl: 'segmento-list.html'
})
export class SegmentoListComponent {
  segmento_list = segmento_list_mock;

  constructor(
    private navCtrl : NavController
    //private navParam : NavParams
  ) {
    console.log('Hello SegmentoListComponent Component');
  }


  /**
   * Regirecciona y lista la pagina de los representantes
   * @param segmento : ISegmento
   */
  setDealerCategory(segmento : ISegmento){
    this.navCtrl.push('marca-list-page', {
      'segmento-selected' : segmento
    });
  }

}
