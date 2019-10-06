"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ArrayGenericProvider = /** @class */ (function () {
    function ArrayGenericProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello ReviewProvider Provider');
    }
    // Permite acceder al 
    ArrayGenericProvider.prototype.init = function (branch) {
        this.branch = branch;
    };
    /**
     * Inserta datos al final del array
     * @param data
     */
    ArrayGenericProvider.prototype.put = function (data) {
        var _this = this;
        this.getAll().then(function (res) {
            res.push(data);
            _this.storage.set(_this.branch, res);
        });
    };
    /**
     * Retorna el tamaño del array
     */
    ArrayGenericProvider.prototype.getSize = function () {
        return this.storage.get(this.branch).then(function (res) {
            return res.length;
        });
    };
    /**
     * Elimina el primer elemento del array
     * @param data
     */
    ArrayGenericProvider.prototype.unshift = function (data) {
        return this.storage.get(this.branch).then(function (res) {
            res.unshift(data);
            return true;
        });
    };
    /**
     * Actualiza en una posición en particula
     * @param pos
     * @param data
     */
    ArrayGenericProvider.prototype.setByIndex = function (pos, data) {
        /*return this.storage.get(this.branch).then((res : any[]) => {
            
        });*/
    };
    ArrayGenericProvider.prototype.setByProperty = function (ObjectProperty) {
        //
    };
    ArrayGenericProvider.prototype.getByIndex = function (index) {
    };
    /**
     * Busca datos que coincidan con una ObjectProperty del Elemento
     * @param ObjectProperty
     * @param data
     */
    ArrayGenericProvider.prototype.saerchDataByProperty = function (ObjectProperty, data) {
        var list = [];
        return this.storage.get(this.branch).then(function (res) {
            res.forEach(function (element, index) {
                if (element[ObjectProperty].indexOf(data) > -1) {
                    list.push(element);
                }
            });
            return list;
        });
    };
    /**
     * Retorna todo el array
     */
    ArrayGenericProvider.prototype.getAll = function () {
        return this.storage.get(this.branch);
    };
    /**
     *
     * @param promise
     */
    /*private ObservableToPromise(promise : Promise<any>){
        return Observable.fromPromise(promise)
    }*/
    /**
     * Elimina una propiedad
     * @param ObjectProperty
     * @param d
     */
    ArrayGenericProvider.prototype.removeByProperty = function (ObjectProperty) {
        var list = [];
        this.storage.get(this.branch).then(function (res) {
            res.forEach(function (element) {
                if (!element.hasOwnProperty(ObjectProperty)) {
                    list.push(element);
                }
            });
            return list;
        });
    };
    ArrayGenericProvider.prototype.removeByIndex = function (index) {
        this.storage.get(this.branch).then(function (res) {
            return res.splice(index, 1);
        });
    };
    /**
     * Elimina todo el array
     */
    ArrayGenericProvider.prototype.drop = function () {
        this.storage.remove(this.branch);
    };
    ArrayGenericProvider = __decorate([
        core_1.Injectable()
    ], ArrayGenericProvider);
    return ArrayGenericProvider;
}());
exports.ArrayGenericProvider = ArrayGenericProvider;
