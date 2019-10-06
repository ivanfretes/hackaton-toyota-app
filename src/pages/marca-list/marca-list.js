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
var MarcaListPage = /** @class */ (function () {
    function MarcaListPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.marcas = []; //IMarca[]
        this.imagePath = api_config_1.imageWsPath;
        this.next_page = 1;
    }
    MarcaListPage.prototype.ionViewDidLoad = function () {
        this.getSegmento();
        this.getMarcas();
    };
    /**
     * Obtiene en segmento seleccionado
     */
    MarcaListPage.prototype.getSegmento = function () {
        this.segmento = this.navParams.get('segmento-selected');
    };
    /**
     * Obtiene todas las marcas que pertecen a un segmento, caso contrario
     * visualiza todoas las marcas
     */
    MarcaListPage.prototype.getMarcas = function () {
        var _this = this;
        if (undefined != this.segmento) {
            var segmento_id = this.segmento['segmento_id'];
            this.api.get("categories/" + segmento_id + "/brands").subscribe(function (res) {
                _this.marcas = res.body;
            });
        }
        else {
            this.api.get("brands").subscribe(function (res) {
                _this.marcas = res.body;
            });
        }
    };
    // Actualiza el listado de marcas, en caso que el usuario desee visualizar mas marcas
    MarcaListPage.prototype.setListMarcas = function (pageNumber) {
        var _this = this;
        this.next_page++;
        this.api.get("brands?page=" + this.next_page).subscribe(function (res) {
            _this.marcas.push(res.body.data);
        });
    };
    // Visualiza el listado de modelos por una marca
    MarcaListPage.prototype.viewModeloListPage = function (marca) {
        this.navCtrl.push('modelo-list-page', {
            'marca-data': marca
        });
    };
    MarcaListPage = __decorate([
        ionic_angular_1.IonicPage({
            name: 'marca-list-page'
        }),
        core_1.Component({
            selector: 'marca-list-page',
            templateUrl: 'marca-list.html'
        })
    ], MarcaListPage);
    return MarcaListPage;
}());
exports.MarcaListPage = MarcaListPage;
