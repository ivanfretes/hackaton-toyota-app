import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarcaListPage } from './marca-list';

@NgModule({
  declarations: [
    MarcaListPage,
  ],
  imports: [
    IonicPageModule.forChild(MarcaListPage),
  ],
})
export class MarcaListPageModule {}
