"use strict";
exports.__esModule = true;
var Webservice = /** @class */ (function () {
    function Webservice() {
        this.host = '190.52.169.112'; // 190.52.169.112 - shoppingcero.com
        this.port = '';
        this.path = 'test/shoppingcero/public/api/v1'; // - test/shoppingcero/public/api/v1
        this.imagePath = 'test/shoppingcero/public';
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
