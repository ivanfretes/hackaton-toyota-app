import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompareListPage } from './compare-list';

@NgModule({
  declarations: [
    CompareListPage,
  ],
  imports: [
    IonicPageModule.forChild(CompareListPage),
  ],
})
export class CompareListPageModule {}
