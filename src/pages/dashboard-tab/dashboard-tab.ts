import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name : 'dashboard-tab-page'
})
@Component({
  selector: 'page-dashboard-tab',
  templateUrl: 'dashboard-tab.html',
})
export class DashboardTabPage {
  
  tab1 = 'dashboard-page';
  tab2 = 'modelo-promo-page';
  tab3 = 'compare-preview-page';
  //tab4 = 'search-option-page';
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardTabPage');
  }

}
