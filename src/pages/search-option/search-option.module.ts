import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchOptionPage } from './search-option';

@NgModule({
  declarations: [
    SearchOptionPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchOptionPage),
  ],
})
export class SearchOptionPageModule {}
