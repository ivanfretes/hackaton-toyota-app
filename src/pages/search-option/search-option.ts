import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage({
  name : 'search-option-page'
})
@Component({
  selector: 'page-search-option',
  templateUrl: 'search-option.html',
})
export class SearchOptionPage {
  // Vehiculos a ser comparados
  vehiclesCompare = [];

  // Listados
  brandList = [];
  vehicleList = [];
  versionList = []

  // ID's Seleccionados
  vehicleIdSelected  :number ;
  brandIdSelected : number;

  // Indice del listado versionList Seleccionado
  versionIndexSelected : number;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private api : ApiProvider) {
      this.setUpDefaultSelected();
  }

  // Retorna listado de marcas
  // se cargan las marcas al cargar la pagina
  getBrands(){
    this.api.get('brands').subscribe(res => {
      this.brandList = res.body;
    });
  }


  // Retorna el listado modelos por brandSelected
  getVehicles(){
    this.vehicleIdSelected = -1;
    if (this.brandIdSelected != -1){
      this.api.get(`brands/${this.brandIdSelected}/vehicles`)
        .subscribe(res => {
        this.vehicleList = res.body;
      });
    } 
  }


  protected setUpDefaultSelected(){
    this.vehicleIdSelected  = -1;
    this.brandIdSelected = -1;
    this.versionIndexSelected = -1;
  }

  // Retorna el listado de versiones de un modelo
  getVersions(){
    this.api.get(`vehicles/${this.vehicleIdSelected}/versions`)
      .subscribe(res => {
        this.versionList = res.body;
    });
  }

  /**
   * Anexa y guarda una version y seteamos a por defecto
   */
  protected saveVersion(){
    let versionSelected = this.versionList[this.versionIndexSelected];
    console.log(versionSelected);

    // Hacer push al listado de comparaciones y agregar a la base de datos remota
  }


  ionViewDidLoad() {
    this.getBrands();
  }

}
