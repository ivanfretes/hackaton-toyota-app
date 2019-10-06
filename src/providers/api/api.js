"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var api_config_1 = require("../../mocks/api-config");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var WEBSERVICE = api_config_1.ws.webservicePath();
var HTTP_OPTIONS = {
    headers: new http_1.HttpHeaders({
        //'Content-Type':  'application/x-www-form-urlencoded',
        //'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
        //'Authorization': 'my-auth-token'
    })
};
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        console.log(WEBSERVICE);
    }
    ApiProvider.prototype.intercept = function (req, next) {
        if (req.responseType == 'json') {
            var clonedRequest = req.clone({ responseType: 'text' });
            return next.handle(clonedRequest).pipe(operators_1.map(function (response) {
                if (response instanceof http_1.HttpResponse) {
                    response = response.clone({ body: JSON.parse(response.body) });
                }
                return response;
            }));
        }
        return next.handle(req);
    };
    ApiProvider.prototype.create = function (path, val) {
        var _this = this;
        return this.http.post(WEBSERVICE + "/" + path, val, HTTP_OPTIONS)
            .pipe(operators_1.tap(function (data) { return console.log(data); }, function (error) { return _this.handleError(error); }));
    };
    ApiProvider.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        //return throwError(
        console.error('Something bad happened; please try again later.');
    };
    ;
    ApiProvider.prototype.edit = function (path, val) {
        var body = new URLSearchParams();
        return this.http.put(WEBSERVICE + "/" + path, body.toString(), HTTP_OPTIONS);
    };
    ApiProvider.prototype.remove = function (path) {
        return this.http["delete"](WEBSERVICE + "/" + path);
    };
    ApiProvider.prototype.get = function (path) {
        return this.http.get(WEBSERVICE + "/" + path, { observe: 'response' })
            .pipe(operators_1.tap(function (data) { }, function (error) { return console.log(error); }));
    };
    ApiProvider = __decorate([
        core_1.Injectable()
    ], ApiProvider);
    return ApiProvider;
}());
exports.ApiProvider = ApiProvider;
