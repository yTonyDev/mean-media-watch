"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var MediaItemService = (function () {
    function MediaItemService(http) {
        this.http = http;
    }
    MediaItemService.prototype.get = function (medium) {
        return this.http.get('http://nodejs-tastic.c9users.io/api/v1/mediaitems');
    };
    MediaItemService.prototype.add = function (mediaItem) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://nodejs-tastic.c9users.io/api/v1/mediaitems', JSON.stringify(mediaItem), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MediaItemService.prototype.delete = function (id) {
        return this.http.delete('http://nodejs-tastic.c9users.io/api/v1/mediaitems/' + id);
    };
    MediaItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MediaItemService);
    return MediaItemService;
}());
exports.MediaItemService = MediaItemService;
//# sourceMappingURL=media-item.service.js.map