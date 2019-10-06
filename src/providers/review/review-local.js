"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ReviewInLocalProvider = /** @class */ (function () {
    function ReviewInLocalProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    /**
     * Elimina el primer elemento del array,
     * Si el elemento ya se inserto retorna false, sino
     * inserta y retorna true
     * @param data
     * @return bool
     */
    ReviewInLocalProvider.prototype.unshift = function (data) {
        var _this = this;
        return this.storage.get('reviews').then(function (res) {
            if (res == null)
                res = [];
            var dataBefereReview = false;
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var element = res_1[_i];
                if (element['vehicle_id'] == data['vehicle_id']) {
                    dataBefereReview = true;
                    break;
                }
            }
            if (dataBefereReview) {
                return false;
            }
            else {
                res.unshift(data);
                _this.storage.set('reviews', res);
                return true;
            }
        });
    };
    /**
     * Retorna todo el array
     */
    ReviewInLocalProvider.prototype.getAll = function () {
        return this.storage.get('reviews');
    };
    ReviewInLocalProvider.prototype.removeByIndex = function (index) {
        /*this.storage.get('reviews').then(res => {
            return res.splice(index, 1);
        });*/
    };
    /**
     * Elimina todo el array
     */
    ReviewInLocalProvider.prototype.drop = function () {
        //this.storage.remove('reviews');
    };
    ReviewInLocalProvider = __decorate([
        core_1.Injectable()
    ], ReviewInLocalProvider);
    return ReviewInLocalProvider;
}());
exports.ReviewInLocalProvider = ReviewInLocalProvider;
