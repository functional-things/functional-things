"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeOptics = void 0;
var composition_1 = require("./composition");
var composeOptics = function () {
    var lenses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        lenses[_i] = arguments[_i];
    }
    return ({
        get: function (w) { return composition_1.compose.apply(void 0, __spread(lenses.map(function (l) { return l.get; })))(w); },
        set: function (p, w) {
            return lenses
                .map(function (lens, i, lenses) {
                return (__assign(__assign({}, lens), { get: function (w) {
                        return composition_1.compose.apply(void 0, __spread(lenses.slice(0, i).map(function (l) { return l.get; })))(w);
                    } }));
            })
                .reduceRight(function (acc, cur) { return cur.set(acc, cur.get(w)); }, p);
        },
    });
};
exports.composeOptics = composeOptics;
//# sourceMappingURL=optics.js.map