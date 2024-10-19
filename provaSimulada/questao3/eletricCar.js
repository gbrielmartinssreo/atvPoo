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
exports.ElectricCar = void 0;
var car_1 = require("./car");
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(owner, fuelType, batteryLife) {
        var _this = _super.call(this, owner, fuelType) || this;
        _this._batteryLife = batteryLife;
        return _this;
    }
    Object.defineProperty(ElectricCar.prototype, "fuelType", {
        get: function () {
            return this.owner;
        },
        set: function (fuelType) {
            this.fuelType = fuelType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElectricCar.prototype, "batteryLife", {
        get: function () {
            return this._batteryLife;
        },
        set: function (batteryLife) {
            this._batteryLife = batteryLife;
        },
        enumerable: false,
        configurable: true
    });
    ElectricCar.prototype.start = function () {
        if (this._batteryLife >= 10) {
            _super.prototype.start.call(this);
            this._batteryLife -= 10;
        }
        else {
            throw new Error("Bateria baixa, carro nao ligou");
        }
    };
    ElectricCar.prototype.stop = function () {
        _super.prototype.stop.call(this);
        console.log("santuario malevolente _{}_");
    };
    return ElectricCar;
}(car_1.Car));
exports.ElectricCar = ElectricCar;
