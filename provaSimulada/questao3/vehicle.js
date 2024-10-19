"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(owner) {
        this._owner = owner;
    }
    Object.defineProperty(Vehicle.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (owner) {
            this._owner = owner;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
exports.Vehicle = Vehicle;
