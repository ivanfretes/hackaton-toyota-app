import { Component } from '@angular/core';

/**
 * Generated class for the RepresentateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'representate',
  templateUrl: 'representate.html'
})
export class RepresentateComponent {

  text: string;

  constructor() {
    console.log('Hello RepresentateComponent Component');
    this.text = 'Hello World';
  }

}
