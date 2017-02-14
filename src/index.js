"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var loading_pane_component_1 = require("./components/loading-pane/loading-pane.component");
var loading_pane_service_1 = require("./services/loading-pane/loading-pane.service");
var platform_browser_1 = require("@angular/platform-browser");
var LoadingPaneModule = (function () {
    function LoadingPaneModule() {
    }
    return LoadingPaneModule;
}());
LoadingPaneModule = __decorate([
    core_1.NgModule({
        declarations: [
            loading_pane_component_1.LoadingPaneComponent
        ],
        exports: [
            loading_pane_component_1.LoadingPaneComponent
        ],
        imports: [
            platform_browser_1.BrowserModule
        ],
        providers: [
            { provide: loading_pane_service_1.LoadingPaneService, useFactory: loading_pane_service_1.defaultLoadingPaneServiceFactory, deps: [] }
        ]
    })
], LoadingPaneModule);
exports.LoadingPaneModule = LoadingPaneModule;
//# sourceMappingURL=index.js.map