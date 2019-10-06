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
/*import { IMarca } from '../../models/marca-model';
import { IModelo } from '../../models/modelo-model';*/
var api_config_1 = require("../../mocks/api-config");
var ModeloDetailPage = /** @class */ (function () {
    function ModeloDetailPage(navCtrl, navParams, api, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.viewCtrl = viewCtrl;
        this.data = null;
        this.marca = null;
        this.modelo = null;
        this.versionSelected = null;
        this.imagePath = api_config_1.imageWsPath;
        // Se obtiene marca y version por defecto
        this.data = this.navParams.data;
        this.marca = this.data['marca-data'];
        this.modelo = this.data['modelo-data'];
        this.versionSelected = this.modelo['version_default'];
    }
    ModeloDetailPage.prototype.ionViewDidLoad = function () {
        console.log(this.versionSelected);
    };
    /**
     * Retorna todas las versiones de una marca
     */
    ModeloDetailPage.prototype.getAllVersions = function () {
    };
    // Agrega la version al comparador
    ModeloDetailPage.prototype.addVersionToCompare = function () {
        // Anexar en el listado de comparaciones 
        // de la base de datos local
        console.log(this.modelo);
    };
    // Agregar la version a los favoritos
    ModeloDetailPage.prototype.addVersionToFavorites = function () {
        // Anexa al listado de favoritos locales
        // y enviar el ID del modelo favorito
    };
    ModeloDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModeloDetailPage = __decorate([
        ionic_angular_1.IonicPage({
            name: 'modelo-detail-page'
        }),
        core_1.Component({
            selector: 'page-modelo-detail',
            templateUrl: 'modelo-detail.html'
        })
    ], ModeloDetailPage);
    return ModeloDetailPage;
}());
exports.ModeloDetailPage = ModeloDetailPage;
