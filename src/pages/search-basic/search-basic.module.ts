import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBasicPage } from './search-basic';
import { ReviewInLocalProvider } from '../../providers/review/review-local';

@NgModule({
  declarations: [
    SearchBasicPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchBasicPage),
  ],
  providers : [
    ReviewInLocalProvider
  ]
})
export class SearchBasicPageModule {}
