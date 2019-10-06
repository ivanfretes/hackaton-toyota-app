import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-ficha-tecnica',
  templateUrl: 'item-ficha-tecnica.html'
})
export class ItemFichaTecnicaComponent {
  @Input() name : any;
  @Input() value : string;
  @Input() type : string; // bool, text, number, null

  typeList = {
    'bool' : this.ifTypeIsBoolean,
    'text' : this.ifTypeIsText
  };
  valueGeneric = '';
  

  constructor() {
    console.log('Hello ItemFichaTecnicaComponent Component');
    setTimeout(() => {
        if (undefined == this.type)
          this.valueGeneric = this.value;
        else {
          let type = this.typeList[this.type];
          this.valueGeneric = type(this.value);
        }
    },0);
  }

  /**
   * Asigna el icono dependiendo del valor booleano
   */
  private ifTypeIsBoolean(value : any){
    if (0 != parseInt(value))
      return 'checkmark';
    else 
      return 'close';
  }


  /**
   * Asigna el valor SI/NO, dependiendo del valor booleando
   */
  private ifTypeIsText(value : any){
    if (0 != parseInt(value))
      return 'Si';
    else 
      return 'No';
  }

}
