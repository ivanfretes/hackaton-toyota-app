"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var segmento_list_mock_1 = require("../../mocks/segmento-list-mock");
var SegmentoListComponent = /** @class */ (function () {
    function SegmentoListComponent(navCtrl
    //private navParam : NavParams
    ) {
        this.navCtrl = navCtrl;
        this.segmento_list = segmento_list_mock_1.segmento_list_mock;
        console.log('Hello SegmentoListComponent Component');
    }
    /**
     * Regirecciona y lista la pagina de los representantes
     * @param segmento : ISegmento
     */
    SegmentoListComponent.prototype.setDealerCategory = function (segmento) {
        this.navCtrl.push('marca-list-page', {
            'segmento-selected': segmento
        });
    };
    SegmentoListComponent = __decorate([
        core_1.Component({
            selector: 'segmento-list-component',
            templateUrl: 'segmento-list.html'
        })
    ], SegmentoListComponent);
    return SegmentoListComponent;
}());
exports.SegmentoListComponent = SegmentoListComponent;
