import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompareVersionPage } from './compare-version';

@NgModule({
  declarations: [
    CompareVersionPage,
  ],
  imports: [
    IonicPageModule.forChild(CompareVersionPage),
  ],
})
export class CompareVersionPageModule {}
