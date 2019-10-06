import { Component } from '@angular/core';

/**
 * Generated class for the MarcaListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'marca-list',
  templateUrl: 'marca-list.html'
})
export class MarcaListComponent {

  text: string;

  constructor() {
    console.log('Hello MarcaListComponent Component');
    this.text = 'Hello World';
  }

}
