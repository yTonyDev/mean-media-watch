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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var media_item_service_1 = require('../../media-item.service');
var providers_1 = require('../../providers');
var router_1 = require('@angular/router');
var MediaItemFormComponent = (function () {
    function MediaItemFormComponent(formBuilder, mediaItemService, lookupLists, router) {
        this.formBuilder = formBuilder;
        this.mediaItemService = mediaItemService;
        this.lookupLists = lookupLists;
        this.router = router;
    }
    MediaItemFormComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            'medium': "Series",
            'name': ["",
                forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[A-Za-z0-9.\\-/\\s]{1,16}')
                ])
            ],
            'category': "",
            'year': ["", this.yearValidator]
        });
    };
    MediaItemFormComponent.prototype.yearValidator = function (control) {
        if (control.value.trim().length === 0)
            return null;
        var year = parseInt(control.value);
        var minYear = 1800;
        var maxYear = 2500;
        if (year >= minYear && year <= maxYear)
            return null;
        return { 'year': { 'min': minYear, 'max': maxYear } };
    };
    MediaItemFormComponent.prototype.onSubmit = function (mediaItem) {
        var _this = this;
        this.mediaItemService.add(mediaItem).subscribe(function () {
            _this.router.navigate([mediaItem.medium]);
        });
    };
    MediaItemFormComponent = __decorate([
        core_1.Component({
            selector: 'media-item-form',
            templateUrl: 'app/components/media-item-form/media-item-form.component.html',
            styleUrls: ['app/components/media-item-form/media-item-form.component.css']
        }),
        __param(2, core_1.Inject(providers_1.LOOKUP_LISTS)), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, media_item_service_1.MediaItemService, Object, router_1.Router])
    ], MediaItemFormComponent);
    return MediaItemFormComponent;
}());
exports.MediaItemFormComponent = MediaItemFormComponent;
//# sourceMappingURL=media-item-form.component.js.map