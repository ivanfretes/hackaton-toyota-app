import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompareVersionPreviewPage } from './compare-version-preview';

@NgModule({
  declarations: [
    CompareVersionPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(CompareVersionPreviewPage),
  ],
})
export class CompareVersionPreviewPageModule {}
