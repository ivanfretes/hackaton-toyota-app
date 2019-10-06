"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var VersionDetailComponent = /** @class */ (function () {
    function VersionDetailComponent(navCtrl, navParams, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        // Modelo seleccionado
        this.currentModelo = null;
        this.versiones = []; // Listado de versiones del modelos
        // Color selecionado, por defecto el colores[0]
        this.versionColorSelected = null;
        // Detalles de la version 
        this.colores = [];
        this.interior = [];
        this.exterior = [];
        this.slider = [];
        this.galeria = [];
        setTimeout(function () {
            console.log(_this.currentModelo);
        }, 0);
    }
    // Retorna detalels de la version 
    VersionDetailComponent.prototype.getVersionDetail = function () {
        var _this = this;
        var versionId = this.versionSelected.id_version;
        this.api.get("versiones/" + versionId).subscribe(function (res) {
            var data = res.body;
            _this.colores = data['colors'];
            _this.exterior = data['exterior'];
            _this.interior = data['interior'];
            _this.slider = data['slider'];
            _this.galeria = data['galeria'];
            _this.setVersionColorSelected(_this.colores[0]);
        });
    };
    //Actualiza la version selecionada
    VersionDetailComponent.prototype.setVersionSelected = function (version) {
        this.versionSelected = version;
        this.getVersionDetail();
    };
    // Actualiza el color de la version, dentro de la paleta
    VersionDetailComponent.prototype.setVersionColorSelected = function (versionColor) {
        this.versionColorSelected = versionColor;
        console.log('update');
        console.log(versionColor);
    };
    __decorate([
        core_1.Input()
    ], VersionDetailComponent.prototype, "currentModelo");
    VersionDetailComponent = __decorate([
        core_1.Component({
            selector: 'version-detail',
            templateUrl: 'version-detail.html'
        })
    ], VersionDetailComponent);
    return VersionDetailComponent;
}());
exports.VersionDetailComponent = VersionDetailComponent;
