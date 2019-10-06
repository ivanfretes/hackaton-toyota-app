import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModeloPromoPage } from './modelo-promo';
import { ReviewInLocalProvider } from '../../providers/review/review-local';

@NgModule({
  declarations: [
    ModeloPromoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModeloPromoPage),
  ],
  providers : [
    ReviewInLocalProvider
  ]
})
export class ModeloPromoPageModule {}
