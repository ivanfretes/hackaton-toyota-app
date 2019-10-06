import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RepresentateComponent } from './representate/representate';
import { MarcaComponent } from './marca/marca';
import { MarcaListComponent } from './marca-list/marca-list';
import { ModeloListComponent } from './modelo-list/modelo-list';
import { TipoVehiculoListComponent } from './tipo-vehiculo-list/tipo-vehiculo-list';
import { VersionDetailComponent } from './version-detail/version-detail';
import { SegmentoListComponent } from './segmento-list/segmento-list';
import { ItemFichaTecnicaComponent } from './item-ficha-tecnica/item-ficha-tecnica';
import { VersionColorComponent } from './version-color/version-color';
import { ItemFichaTecnicaFullComponent } from './item-ficha-tecnica-full/item-ficha-tecnica-full';
import { ModeloItemDetailComponent } from './modelo-item-detail/modelo-item-detail';


@NgModule({
	declarations: [
        RepresentateComponent,
        MarcaComponent,
        MarcaListComponent,
        ModeloListComponent,
        TipoVehiculoListComponent,
        VersionDetailComponent,
        SegmentoListComponent,
        ItemFichaTecnicaComponent,
    VersionColorComponent,
    ItemFichaTecnicaFullComponent,
    ModeloItemDetailComponent],
	imports: [
		IonicModule
	],
	exports: [ 
        RepresentateComponent,
        MarcaComponent,
        MarcaListComponent,
        ModeloListComponent,
        TipoVehiculoListComponent,
        VersionDetailComponent,
        SegmentoListComponent,
        ItemFichaTecnicaComponent,
        VersionColorComponent,
        ItemFichaTecnicaFullComponent,
    ModeloItemDetailComponent]
})
export class ComponentsModule {}
