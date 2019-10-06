import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'version-detail',
  templateUrl: 'version-detail.html'
})
export class VersionDetailComponent {

  // Modelo seleccionado
  @Input() currentModelo : any = null;
  versiones : any = []; // Listado de versiones del modelos
  versionSelected : any;

  // Color selecionado, por defecto el colores[0]
  versionColorSelected : any = null;

  // Detalles de la version 
  colores = [];
  interior  = [];
  exterior =  []; 
  slider =  []; 
  galeria = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api : ApiProvider
    ) {
      setTimeout(() => {
        console.log(this.currentModelo);
      }, 0);
  }



  // Retorna detalels de la version 
  getVersionDetail(){
    let versionId = this.versionSelected.id_version;
    this.api.get(`versiones/${versionId}`).subscribe(res => {
      let data = res.body;
      this.colores = data['colors'];
      this.exterior = data['exterior'];
      this.interior = data['interior'];
      this.slider = data['slider'];
      this.galeria = data['galeria'];    

      this.setVersionColorSelected(this.colores[0]);
    });
  }

  //Actualiza la version selecionada
  setVersionSelected(version){
    this.versionSelected = version;
    this.getVersionDetail();
  }

  // Actualiza el color de la version, dentro de la paleta
  setVersionColorSelected(versionColor : any){
    this.versionColorSelected = versionColor;
    console.log('update');
    console.log(versionColor);
  }
}
