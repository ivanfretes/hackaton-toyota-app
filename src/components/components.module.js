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
var representate_1 = require("./representate/representate");
var marca_1 = require("./marca/marca");
var marca_list_1 = require("./marca-list/marca-list");
var modelo_list_1 = require("./modelo-list/modelo-list");
var tipo_vehiculo_list_1 = require("./tipo-vehiculo-list/tipo-vehiculo-list");
var version_detail_1 = require("./version-detail/version-detail");
var segmento_list_1 = require("./segmento-list/segmento-list");
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            declarations: [
                representate_1.RepresentateComponent,
                marca_1.MarcaComponent,
                marca_list_1.MarcaListComponent,
                modelo_list_1.ModeloListComponent,
                tipo_vehiculo_list_1.TipoVehiculoListComponent,
                version_detail_1.VersionDetailComponent,
                segmento_list_1.SegmentoListComponent
            ],
            imports: [
                ionic_angular_1.IonicModule
            ],
            exports: [
                representate_1.RepresentateComponent,
                marca_1.MarcaComponent,
                marca_list_1.MarcaListComponent,
                modelo_list_1.ModeloListComponent,
                tipo_vehiculo_list_1.TipoVehiculoListComponent,
                version_detail_1.VersionDetailComponent,
                segmento_list_1.SegmentoListComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
