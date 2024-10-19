"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var vehicle_1 = require("./vehicle");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(owner, fuelType) {
        var _this = _super.call(this, owner) || this;
        _this._fuelType = fuelType;
        return _this;
    }
    Object.defineProperty(Car.prototype, "fuelType", {
        get: function () {
            return this._fuelType;
        },
        set: function (fuelType) {
            this._fuelType = fuelType;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.start = function () {
        console.log("O carro ligou");
    };
    Car.prototype.stop = function () {
        console.log("O carro desligou");
    };
    return Car;
}(vehicle_1.Vehicle));
exports.Car = Car;
