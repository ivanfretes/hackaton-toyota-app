import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FichaTecnicaFullPage } from './ficha-tecnica-full';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FichaTecnicaFullPage,
  ],
  imports: [
    IonicPageModule.forChild(FichaTecnicaFullPage),
    ComponentsModule
  ],
})
export class FichaTecnicaFullPageModule {}
