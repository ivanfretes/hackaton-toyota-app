import { Input ,Component } from '@angular/core';


@Component({
  selector: 'item-ficha-tecnica-full',
  templateUrl: 'item-ficha-tecnica-full.html'
})
export class ItemFichaTecnicaFullComponent {
  @Input() versionSelected;

  constructor() {
    console.log('Hello ItemFichaTecnicaFullComponent Component');
  }

}
