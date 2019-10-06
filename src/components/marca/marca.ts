import { Component } from '@angular/core';

/**
 * Generated class for the MarcaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'marca',
  templateUrl: 'marca.html'
})
export class MarcaComponent {

  text: string;

  constructor() {
    console.log('Hello MarcaComponent Component');
    this.text = 'Hello World';
  }

}
