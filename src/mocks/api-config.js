"use strict";
exports.__esModule = true;
var Webservice = /** @class */ (function () {
    function Webservice() {
        this.host = 'localhost'; // 190.52.169.112 - shoppingcero.com
        this.port = ':8000';
        this.path = 'api/v1'; // - test/shoppingcero/public/api/v1
        this.imagePath = '';
    }
    Webservice.prototype.hostWithPort = function () {
        return "http://" + this.host + this.port;
    };
    Webservice.prototype.webservicePath = function () {
        return "http://" + this.host + this.port + "/" + this.path;
    };
    Webservice.prototype.getImagePath = function () {
        return "http://" + this.host + this.port + "/" + this.imagePath + "/";
    };
    return Webservice;
}());
exports.ws = new Webservice();
exports.imageWsPath = exports.ws.getImagePath();
