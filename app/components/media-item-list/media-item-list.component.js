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
var core_1 = require('@angular/core');
var media_item_component_1 = require('../media-item/media-item.component');
var category_list_pipe_1 = require('../../category-list.pipe');
var media_item_service_1 = require('../../media-item.service');
var router_1 = require('@angular/router');
var MediaItemListComponent = (function () {
    function MediaItemListComponent(mediaItemService, route, router) {
        this.mediaItemService = mediaItemService;
        this.route = route;
        this.router = router;
        this.medium = '';
        this.mediaItems = [];
    }
    MediaItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.medium = params['medium'];
            _this.getMediaItems(_this.medium);
        });
    };
    MediaItemListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MediaItemListComponent.prototype.onMediaItemDeleted = function (mediaItem) {
        var _this = this;
        this.sub.unsubscribe();
        this.mediaItemService.delete(mediaItem._id).subscribe(function () { _this.getMediaItems(_this.medium); });
    };
    MediaItemListComponent.prototype.getMediaItems = function (medium) {
        var _this = this;
        this.medium = medium;
        this.mediaItemService.get(medium)
            .map(function (res) { return res.json(); })
            .subscribe(function (mediaItems) {
            if (_this.medium != undefined) {
                _this.mediaItems = mediaItems.filter(_this.filterMedium, medium);
            }
            else {
                _this.mediaItems = mediaItems;
            }
        }, function (err) { return _this.router.navigate(['']); });
    };
    MediaItemListComponent.prototype.filterMedium = function (obj) {
        if (obj.medium === this) {
            return true;
        }
        else {
            return false;
        }
    };
    MediaItemListComponent = __decorate([
        core_1.Component({
            selector: 'media-item-list',
            directives: [media_item_component_1.MediaItemComponent, router_1.ROUTER_DIRECTIVES],
            pipes: [category_list_pipe_1.CategoryListPipe],
            templateUrl: 'app/components/media-item-list/media-item-list.component.html',
            styleUrls: ['app/components/media-item-list/media-item-list.component.css']
        }), 
        __metadata('design:paramtypes', [media_item_service_1.MediaItemService, router_1.ActivatedRoute, router_1.Router])
    ], MediaItemListComponent);
    return MediaItemListComponent;
}());
exports.MediaItemListComponent = MediaItemListComponent;
//# sourceMappingURL=media-item-list.component.js.map