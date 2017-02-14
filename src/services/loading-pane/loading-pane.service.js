"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var rxjs_1 = require("rxjs");
var LoadingPaneService = (function () {
    function LoadingPaneService(defaultMinDelayInMs) {
        this.defaultMinDelayInMs = defaultMinDelayInMs;
    }
    LoadingPaneService.prototype.createTracker = function (complete, minDelayInMs) {
        return new WorkTrackerInternal(complete, minDelayInMs || this.defaultMinDelayInMs);
    };
    return LoadingPaneService;
}());
LoadingPaneService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Number])
], LoadingPaneService);
exports.LoadingPaneService = LoadingPaneService;
function defaultLoadingPaneServiceFactory() {
    return new LoadingPaneService(300);
}
exports.defaultLoadingPaneServiceFactory = defaultLoadingPaneServiceFactory;
function noop() { }
function deferred(delayInMs, action) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve((action || noop)());
        }, delayInMs);
    });
}
var WorkTracker = (function () {
    function WorkTracker() {
    }
    WorkTracker.prototype.track = function (promise) {
        throw "Should be overridden";
    };
    Object.defineProperty(WorkTracker.prototype, "complete", {
        get: function () {
            throw "Should be overridden";
        },
        enumerable: true,
        configurable: true
    });
    return WorkTracker;
}());
exports.WorkTracker = WorkTracker;
var WorkTrackerInternal = (function (_super) {
    __extends(WorkTrackerInternal, _super);
    function WorkTrackerInternal(complete, minDelayInMs) {
        var _this = _super.call(this) || this;
        _this.minDelayInMs = minDelayInMs;
        _this._activePromises = 0;
        _this._completeSubject = new rxjs_1.BehaviorSubject(complete);
        return _this;
    }
    Object.defineProperty(WorkTrackerInternal.prototype, "complete", {
        get: function () {
            return this._completeSubject;
        },
        enumerable: true,
        configurable: true
    });
    WorkTrackerInternal.prototype.track = function (promise) {
        console.log(promise);
        return this.trackInternal(promise, this.minDelayInMs);
    };
    WorkTrackerInternal.prototype.trackInternal = function (promise, minDelay) {
        var _this = this;
        var complete = function (x) {
            _this.completePromise();
            return promise;
        };
        var completeAndBubbleReject = function (e) {
            _this.completePromise();
            return Promise.reject(e);
        };
        this._completeSubject.next(false);
        this._activePromises++;
        if (minDelay === 0) {
            return promise.then(complete, completeAndBubbleReject);
        }
        else {
            return Promise.all([promise, deferred(minDelay)])
                .then(complete, completeAndBubbleReject);
        }
    };
    WorkTrackerInternal.prototype.completePromise = function () {
        this._activePromises = Math.max(0, this._activePromises - 1);
        this._completeSubject.next(this._activePromises === 0);
    };
    return WorkTrackerInternal;
}(WorkTracker));
exports.WorkTrackerInternal = WorkTrackerInternal;
//# sourceMappingURL=loading-pane.service.js.map