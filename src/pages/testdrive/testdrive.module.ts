import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestdrivePage } from './testdrive';

@NgModule({
  declarations: [
    TestdrivePage,
  ],
  imports: [
    IonicPageModule.forChild(TestdrivePage),
  ],
})
export class TestdrivePageModule {}
