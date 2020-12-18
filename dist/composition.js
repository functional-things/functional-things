"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeRight = exports.compose = void 0;
var compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (p) {
        return fns.reduce(function (acc, cur) { return cur(acc); }, p);
    };
};
exports.compose = compose;
var composeRight = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (p) {
        return fns.reduceRight(function (acc, cur) { return cur(acc); }, p);
    };
};
exports.composeRight = composeRight;
//# sourceMappingURL=composition.js.map