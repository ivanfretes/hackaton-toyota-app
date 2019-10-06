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
//import { Storage } from '@ionic/storage';
var CompareVersionPage = /** @class */ (function () {
    function CompareVersionPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        // Vehiculos a ser comparados
        this.vehiclesCompare = [];
        // Listados
        this.brandList = [];
        this.vehicleList = [];
        this.versionList = [];
        this.setUpDefaultSelected();
    }
    // Retorna listado de marcas
    // se cargan las marcas al cargar la pagina
    CompareVersionPage.prototype.getBrands = function () {
        var _this = this;
        this.api.get('brands').subscribe(function (res) {
            _this.brandList = res.body;
        });
    };
    // Retorna el listado modelos por brandSelected
    CompareVersionPage.prototype.getVehicles = function () {
        var _this = this;
        this.vehicleIdSelected = -1;
        if (this.brandIdSelected != -1) {
            this.api.get("brands/" + this.brandIdSelected + "/vehicles")
                .subscribe(function (res) {
                _this.vehicleList = res.body;
            });
        }
    };
    CompareVersionPage.prototype.setUpDefaultSelected = function () {
        this.vehicleIdSelected = -1;
        this.brandIdSelected = -1;
        this.versionIndexSelected = -1;
    };
    // Retorna el listado de versiones de un modelo
    CompareVersionPage.prototype.getVersions = function () {
        var _this = this;
        this.api.get("vehicles/" + this.vehicleIdSelected + "/versions")
            .subscribe(function (res) {
            _this.versionList = res.body;
        });
    };
    /**
     * Anexa y guarda una version y seteamos a por defecto
     */
    CompareVersionPage.prototype.saveVersion = function () {
        var versionSelected = this.versionList[this.versionIndexSelected];
        console.log(versionSelected);
        // Hacer push al listado de comparaciones y agregar a la base de datos remota
    };
    CompareVersionPage.prototype.ionViewDidLoad = function () {
        this.getBrands();
    };
    CompareVersionPage = __decorate([
        ionic_angular_1.IonicPage({
            name: 'compare-version-page'
        }),
        core_1.Component({
            selector: 'page-compare-version',
            templateUrl: 'compare-version.html'
        })
    ], CompareVersionPage);
    return CompareVersionPage;
}());
exports.CompareVersionPage = CompareVersionPage;
