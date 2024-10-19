"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(country, state, city, neighborhood, street, numHouse) {
        this._country = country;
        this._state = state;
        this._city = city;
        this._neighborhood = neighborhood;
        this._street = street;
        this._numHouse = numHouse;
    }
    Object.defineProperty(Address.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (country) {
            this._country = country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (city) {
            this._city = city;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "neighborhood", {
        get: function () {
            return this._neighborhood;
        },
        set: function (neighborhood) {
            this._neighborhood = neighborhood;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (street) {
            this._street = street;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "numHouse", {
        get: function () {
            return this._numHouse;
        },
        set: function (numHouse) {
            this._numHouse = numHouse;
        },
        enumerable: false,
        configurable: true
    });
    return Address;
}());
exports.Address = Address;
