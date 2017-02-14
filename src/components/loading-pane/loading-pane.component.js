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
var core_1 = require("@angular/core");
var loading_pane_service_1 = require("../../services/loading-pane/loading-pane.service");
var LoadingPaneComponent = (function () {
    function LoadingPaneComponent() {
    }
    LoadingPaneComponent.prototype.ngOnInit = function () {
        this.isLoading = this.tracker.complete.map(function (x) {
            console.log(x);
            return !x;
        });
    };
    return LoadingPaneComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", loading_pane_service_1.WorkTracker)
], LoadingPaneComponent.prototype, "tracker", void 0);
LoadingPaneComponent = __decorate([
    core_1.Component({
        selector: 'loading-pane',
        templateUrl: 'loading-pane.component.html',
        styleUrls: ['loading-pane.component.scss']
    }),
    __metadata("design:paramtypes", [])
], LoadingPaneComponent);
exports.LoadingPaneComponent = LoadingPaneComponent;
//# sourceMappingURL=loading-pane.component.js.map