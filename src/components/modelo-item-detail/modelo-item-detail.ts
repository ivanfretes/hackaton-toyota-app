import { Component } from '@angular/core';

/**
 * Generated class for the ModeloItemDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modelo-item-detail',
  templateUrl: 'modelo-item-detail.html'
})
export class ModeloItemDetailComponent {

  text: string;

  constructor() {
    console.log('Hello ModeloItemDetailComponent Component');
    this.text = 'Hello World';
  }

}
