import { Component } from '@angular/core';

/**
 * Generated class for the ModeloListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modelo-list',
  templateUrl: 'modelo-list.html'
})
export class ModeloListComponent {

  text: string;

  constructor() {
    console.log('Hello ModeloListComponent Component');
    this.text = 'Hello World';
  }

}
