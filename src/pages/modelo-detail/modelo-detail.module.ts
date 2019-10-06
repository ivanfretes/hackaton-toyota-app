import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModeloDetailPage } from './modelo-detail';

import { ComponentsModule } from '../../components/components.module';
import { ReviewInLocalProvider } from '../../providers/review/review-local';

@NgModule({
  declarations: [
    ModeloDetailPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ModeloDetailPage),
  ],
  providers : [
    ReviewInLocalProvider
  ]
})
export class ModeloDetailPageModule {}
