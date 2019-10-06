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
var modelo_detail_1 = require("./modelo-detail");
var components_module_1 = require("../../components/components.module");
var object_to_array_1 = require("../../pipes/object-to-array/object-to-array");
var ModeloDetailPageModule = /** @class */ (function () {
    function ModeloDetailPageModule() {
    }
    ModeloDetailPageModule = __decorate([
        core_1.NgModule({
            declarations: [
                modelo_detail_1.ModeloDetailPage,
                object_to_array_1.ObjectToArrayPipe
            ],
            imports: [
                components_module_1.ComponentsModule,
                ionic_angular_1.IonicPageModule.forChild(modelo_detail_1.ModeloDetailPage),
            ]
        })
    ], ModeloDetailPageModule);
    return ModeloDetailPageModule;
}());
exports.ModeloDetailPageModule = ModeloDetailPageModule;
