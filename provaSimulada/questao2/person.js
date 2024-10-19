"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this._name = name;
        this._age = age;
        this._address = address;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullAddress = function () {
        console.log("Country:".concat(this._address.country));
        console.log("State:".concat(this._address.state));
        console.log("City:".concat(this._address.city));
        console.log("Neighborhood:".concat(this._address.neighborhood));
        console.log("Street:".concat(this._address.street));
        console.log("Number:".concat(this._address.numHouse));
    };
    return Person;
}());
exports.Person = Person;
