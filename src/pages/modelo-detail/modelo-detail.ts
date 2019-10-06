import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
/*import { IMarca } from '../../models/marca-model';
import { IModelo } from '../../models/modelo-model';*/
import { imageWsPath } from '../../mocks/api-config';
import { ReviewInLocalProvider } from '../../providers/review/review-local';

@IonicPage({
  name : 'modelo-detail-page' 
})
@Component({
  selector: 'page-modelo-detail',
  templateUrl: 'modelo-detail.html',
})
export class ModeloDetailPage {
  data = null;
  marca = null;
  modelo = null;

  // Listado, Detalle resumido, y detalle especifico de las versiones
  versionList : any[] = [];
  versionSelected = null;
  imagePath = imageWsPath;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api : ApiProvider,
    public viewCtrl : ViewController,
    public modalCtrl : ModalController,
    private reviewLocal : ReviewInLocalProvider,
    public toastCtrl : ToastController
  ) {

    // Se obtiene marca y version por defecto
    this.data = this.navParams.data;
    this.marca = this.data['marca-data'];
    this.modelo = this.data['modelo-data'];
    this.versionSelected = this.modelo['version_default'];

    console.log(this.versionSelected);
  }

  ionViewDidLoad() {
    //this.getAllVersions();
  }


  /**
   * Retorna todas las versiones de una marca
   */
  private getAllVersions(){
    let modeloId = this.modelo['vehicle_id'];
    this.api.get(`vehicles/${modeloId}/versions`).subscribe(res  => {
      this.versionList = res.body.data;
    });
  }

  // Agrega la version al comparador
  addVersionToCompare(){
    // Anexar en el listado de comparaciones 
    // de la base de datos local
    console.log(this.modelo);
  }


  // Genera/Anexa una versión Favorita
  addVersionToFavorites(){
    
    this.reviewLocal.unshift(this.modelo).then(res => {
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


  /**
   * Visualiza el listado de toda la ficha tecnica
   */
  viewFichaTecnicaFull(){
    let modalCtrl = this.modalCtrl.create('ficha-tecnica-full', {
      'version' : this.versionSelected
    });
    modalCtrl.present();
  }

  /**
   * Visualiza la opcion de financiacion
   */
  viewFinanciationBancoPage(){
    let modalCtrl = this.modalCtrl.create('financiacion-page',{
      'version' : this.versionSelected
    });
    modalCtrl.present();
  }


  viewSearchBasicPage(){
    let modal = this.modalCtrl.create('search-basic-page');
    modal.present();
  }

  

}


export interface IVersionFullDetail {
  brand : any;
  dealer : any;
  version : {
    colors : any[];
    detail : any; // Contiene lo detalles de la version
    exterior : any[];
    interior : any[];
    slide : any[];
  }
}
