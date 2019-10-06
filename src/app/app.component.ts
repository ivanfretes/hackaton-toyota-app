import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Tabs } from 'ionic-angular/navigation/nav-interfaces';

//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'modelo-promo-page';

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen ) 
  {
    this.pages = [
      { title: 'Vehiculos', component: 'modelo-promo-page' },
      { title: 'Mi Auto', component: 'favorites-version-page' },
      { title: 'Agenda', component: 'agenda-page' },
      { title: 'Mantenimientos', component: 'mantenimiento-page' },
      //{ title: 'Presupuestos', component: 'favorites-version-page' },
      { title: 'Repuestos', component: 'favorites-version-page' },  
      { title: 'Accesorios', component: 'favorites-version-page' },  
      { title: 'Promociones', component: 'modelo-promo-page' },
      
      { title: 'Test Drive', component: 'testdrive-page' },
      { title: 'Usados', component: 'favorites-version-page' },
      { title: 'Cotiza tu usado', component: 'favorites-version-page' },
      { title: 'Vencimientos', component: 'favorites-version-page' },
      { title: 'Historico de Pagos', component: 'favorites-version-page' },
      { title: 'Pagar Factura', component: 'favorites-version-page' },
      { title: 'Vincular Seguro', component: 'favorites-version-page' },  
      { title: 'Sucursales', component: 'favorites-version-page' },
      { title: 'SOCORRO', component: 'favorites-version-page' },

      /*{ title: 'Comparaciones', component: 'compare-list-page' },*/
      
      //{ title: 'Creditos', component: 'compare-version-page' },
      //{ title : 'Buscador', component : 'search-option-page'},
      //{ title: 'Interes', component: 'dashboard-page'},
      //{ title: 'Salir', component: 'dashboard-page'}
    ];

  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
