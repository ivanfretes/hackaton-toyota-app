import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesVersionPage } from './favorites-version';
import { ReviewInLocalProvider } from '../../providers/review/review-local';

@NgModule({
  declarations: [
    FavoritesVersionPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesVersionPage),
  ],
  providers : [
    ReviewInLocalProvider
  ]
})
export class FavoritesVersionPageModule {}
