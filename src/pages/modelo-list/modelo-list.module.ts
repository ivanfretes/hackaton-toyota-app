import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModeloListPage } from './modelo-list';
import { ReviewInLocalProvider } from '../../providers/review/review-local';


@NgModule({
  declarations: [
    ModeloListPage,
  ],
  imports: [
    IonicPageModule.forChild(ModeloListPage),
  ],
  providers : [
    ReviewInLocalProvider
  ]
})
export class ModeloListPageModule {}
