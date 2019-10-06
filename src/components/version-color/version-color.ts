import { CUSTOM_ELEMENTS_SCHEMA ,Input, Component } from '@angular/core';
import { imageWsPath } from '../../mocks/api-config';

@Component({
  selector: 'version-color',
  templateUrl: 'version-color.html'
})
export class VersionColorComponent {
  @Input() colores; 
  @Input() imageColorSelected; 
  imagePath = imageWsPath;

  constructor() {
    console.log('Hello VersionColorComponent Component');
  }

  // Actualiza el color a visualizar
  setPreview(indexSelected : number){
    this.imageColorSelected = this.colores[indexSelected];
  }

  ionViewDidLoad() {
    console.log('VersionColorComponent - ionViewDidLoad');
  }

  getColors(){
    //console.log(this.colorSeleted);
  }

}
