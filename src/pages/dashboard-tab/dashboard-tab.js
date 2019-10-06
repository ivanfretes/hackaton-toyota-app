"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var DashboardTabPage = /** @class */ (function () {
    function DashboardTabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = 'dashboard-page';
        this.tab2 = 'marca-list-page';
        //tab3 = 'modelo-list-page';
        this.tab4 = 'search-option-page';
    }
    DashboardTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardTabPage');
    };
    DashboardTabPage = __decorate([
        ionic_angular_1.IonicPage({
            name: 'dashboard-tab-page'
        }),
        core_1.Component({
            selector: 'page-dashboard-tab',
            templateUrl: 'dashboard-tab.html'
        })
    ], DashboardTabPage);
    return DashboardTabPage;
}());
exports.DashboardTabPage = DashboardTabPage;
