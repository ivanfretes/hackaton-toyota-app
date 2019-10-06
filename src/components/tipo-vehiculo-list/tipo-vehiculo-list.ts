import { Component } from '@angular/core';

import { ApiProvider }  from '../../providers/api/api';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'tipo-vehiculo-list',
  templateUrl: 'tipo-vehiculo-list.html'
})
export class TipoVehiculoListComponent {
  tipo_vehiculos = [];

  constructor(
    private navCtrl : NavController,
    private navParam : NavParams,
    private api : ApiProvider,
  ) {
    this.getTipoVehiculos();
  }


  // Lista los tipo vehiculos disponibles
  getTipoVehiculos(){
    this.api.get('segmentos').subscribe(res => {
      this.tipo_vehiculos = res.body;
    })
  }


  // Redirecciona a la pagina de los representantes
  viewRepresentantePage(tipo : any){
    this.navCtrl.push('marca-list-page', {
      'tipo-vehiculo' : tipo
    });
  }

}
