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
exports.Bike = void 0;
var vehicle_1 = require("./vehicle");
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(owner) {
        return _super.call(this, owner) || this;
    }
    Object.defineProperty(Bike.prototype, "owner", {
        get: function () {
            return this.owner;
        },
        set: function (owner) {
            this.owner = owner;
        },
        enumerable: false,
        configurable: true
    });
    Bike.prototype.start = function () {
        console.log("Pé na tabua");
    };
    Bike.prototype.stop = function () {
        console.log("Freiando...");
    };
    return Bike;
}(vehicle_1.Vehicle));
exports.Bike = Bike;
