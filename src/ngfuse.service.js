"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Fuse = require("fuse.js");
var NgFuseService = /** @class */ (function () {
    function NgFuseService() {
        this.defaults = {
            shouldSort: true,
            threshold: 0.4,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            minSearchStringLenght: 1
        };
        this.searchOptions = this.defaults;
    }
    ;
    NgFuseService.prototype.search = function (collection, searchString, options) {
        if (options === void 0) { options = {}; }
        Object.assign(this.searchOptions, this.defaults, options);
        var results = [];
        if (searchString && searchString.length >= this.searchOptions.minSearchStringLenght) {
            var fuse = new Fuse(collection, this.searchOptions);
            results = fuse.search(searchString);
            return results;
        }
        else {
            return collection;
        }
    };
    ;
    NgFuseService = __decorate([
        core_1.Injectable()
    ], NgFuseService);
    return NgFuseService;
}());
exports.NgFuseService = NgFuseService;
