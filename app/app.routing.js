"use strict";
var router_1 = require('@angular/router');
var media_item_list_component_1 = require('./components/media-item-list/media-item-list.component');
var media_item_form_component_1 = require('./components/media-item-form/media-item-form.component');
var appRoutes = [
    { path: '', component: media_item_list_component_1.MediaItemListComponent },
    { path: 'add', component: media_item_form_component_1.MediaItemFormComponent },
    { path: ':medium', component: media_item_list_component_1.MediaItemListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map