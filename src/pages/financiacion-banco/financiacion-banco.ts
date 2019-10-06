import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { entidadesFinanciacion } from '../../mocks/entidades-financiacion';

@IonicPage({
  name : 'financiacion-page'
})
@Component({
  selector: 'page-financiacion-banco',
  templateUrl: 'financiacion-banco.html',
})
export class FinanciacionBancoPage {

  version : any = null;
  financierasList = entidadesFinanciacion;
  financieraSelected = null; // Indice de la financiera seleccionada 

  // Datos de la financiacion
  financiacionData : financiacionData = {
    financiera : null,
    userId : null,
    vehicleVersion : null,
    plazo : 24,
    montoEntrega : null,
    interes : null,
    montoCuota : null,
    moneda : '$',
  };
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl : ViewController) {
      this.version = this.navParams.get('version');
  }

  ionViewDidLoad() {
    this.financiacionData.vehicleVersion = this.version;
  }


  dismiss(){
    this.viewCtrl.dismiss();
  }

  /**
   * Selecciona la entidad financiera de la que se solicitar el credito
   */
  setFinancieraSelected(){
    let finTmp = this.financierasList[this.financieraSelected];
    this.financiacionData.financiera = finTmp;
    console.log(finTmp);
    
    this.financiacionData.interes = finTmp['interes'];
  }

  /**
   * Se actualiza los datos que se implementaran para la generacion de un credito
   */
  setFinancieraMontoCuotaCredito(){
    console.log('Se genera el monto de la cuota para el credito');
    //this.setPlazo();
    //this.setMontoEntrega();

    let version = this.version;
    let finTmp = this.financiacionData;
    let porcentajeInteres = (finTmp.interes / 100) + 1;
    let montoCuota =  (version.cash_price * porcentajeInteres);
    montoCuota = ( montoCuota - finTmp.montoEntrega ) / Math.floor(finTmp.plazo);
    this.financiacionData.montoCuota = Math.floor(montoCuota);
  }


  /**
   * [ Validacion ]
   * Se actualiza el plazo del credito, el mismo no puede ser menor a 12
   */
  private setPlazo(){
    console.log('Se actualiza el plazo del credito');
    const MIN_CUOTA = 12;
    if (this.financiacionData.plazo < MIN_CUOTA){
      alert('El plazo de la cuota no puede ser menor a 12');
    }
  }

  /**
   * [ Validacion ] - No Implementado
   * Se verifica que el monto de la entrega no sea nulo
   */
  private setMontoEntrega(){
    console.log('Se actualiza el monto de la entrega');
    if (this.financiacionData.montoEntrega == null){
      alert('Primero asigne un Monto de Entrega');
    }
  }

  solicitarFinanciacion(){
    alert('Financiación Solicitada Correctamente');
  }

}

export interface financiacionData {
  financiera : any;
  plazo : number;
  montoEntrega : number;
  interes : number;
  montoCuota : number;
  moneda : string;
  userId : any;
  vehicleVersion : any;
}