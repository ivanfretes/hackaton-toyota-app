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
var api_config_1 = require("../../mocks/api-config");
var FavoritesVersionPage = /** @class */ (function () {
    function FavoritesVersionPage(navCtrl, navParams, reviewLocal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reviewLocal = reviewLocal;
        this.imagePath = api_config_1.imageWsPath;
    }
    FavoritesVersionPage.prototype.ionViewDidLoad = function () {
        this.getFavorites();
    };
    // Retorna el listado de favoritos
    // Optimizar webservice, debe retornar el listado de favoritos por usuario
    FavoritesVersionPage.prototype.getFavorites = function () {
        /*this.api.get(`favorites`).subscribe(res => {
          this.favorites = res.body;
        });*/
        var _this = this;
        this.reviewLocal.getAll().then(function (res) {
            _this.modelos = res;
        });
    };
    FavoritesVersionPage = __decorate([
        ionic_angular_1.IonicPage({
            name: 'favorites-version-page'
        }),
        core_1.Component({
            selector: 'page-favorites-version',
            templateUrl: 'favorites-version.html'
        })
    ], FavoritesVersionPage);
    return FavoritesVersionPage;
}());
exports.FavoritesVersionPage = FavoritesVersionPage;
