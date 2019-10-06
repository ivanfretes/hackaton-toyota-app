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
//import { IMarca } from '../../models/marca-model';
var api_config_1 = require("../../mocks/api-config");
//import { IModelo } from '../../models/modelo-model';
var ModeloListPage = /** @class */ (function () {
    function ModeloListPage(navCtrl, navParams, api, reviewLocal, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.reviewLocal = reviewLocal;
        this.modalCtrl = modalCtrl;
        this.imagePath = api_config_1.imageWsPath;
        this.marca = null; // 
        this.modelos = [];
        this.titleHeader = '';
    }
    ModeloListPage.prototype.ionViewDidLoad = function () {
        this.marca = this.navParams.get('marca-data');
        this.getModelos();
    };
    // Llama al listado de modelos de una determinada marca
    ModeloListPage.prototype.getModelos = function () {
        var _this = this;
        if (undefined != this.marca) {
            var marcaId = this.marca.brand_id;
            this.api.get("brands/" + marcaId + "/vehicles").subscribe(function (res) {
                _this.modelos = res.body.data;
                console.log(_this.modelos);
            });
        }
    };
    // Visualiza el detalle de un modelo
    ModeloListPage.prototype.viewModeloDetailPage = function (modelo) {
        var modalCtrl = this.modalCtrl.create('modelo-detail-page', {
            'marca-data': this.marca,
            'modelo-data': modelo
        });
        modalCtrl.present();
    };
    // Genera/Anexa una versión Favorita
    ModeloListPage.prototype.addVersionToFavorites = function (modelo) {
        this.reviewLocal.unshift(modelo).then(function (res) {
            console.log(res);
        });
    };
    ModeloListPage = __decorate([
        ionic_angular_1.IonicPage({
            name: 'modelo-list-page'
        }),
        core_1.Component({
            selector: 'page-modelo-list',
            templateUrl: 'modelo-list.html'
        })
    ], ModeloListPage);
    return ModeloListPage;
}());
exports.ModeloListPage = ModeloListPage;
