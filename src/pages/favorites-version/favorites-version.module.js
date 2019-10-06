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
var favorites_version_1 = require("./favorites-version");
var review_local_1 = require("../../providers/review/review-local");
var FavoritesVersionPageModule = /** @class */ (function () {
    function FavoritesVersionPageModule() {
    }
    FavoritesVersionPageModule = __decorate([
        core_1.NgModule({
            declarations: [
                favorites_version_1.FavoritesVersionPage,
            ],
            imports: [
                ionic_angular_1.IonicPageModule.forChild(favorites_version_1.FavoritesVersionPage),
            ],
            providers: [
                review_local_1.ReviewInLocalProvider
            ]
        })
    ], FavoritesVersionPageModule);
    return FavoritesVersionPageModule;
}());
exports.FavoritesVersionPageModule = FavoritesVersionPageModule;
