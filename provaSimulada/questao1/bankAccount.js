"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance, accountHolder) {
        this.saques = 0;
        this._accountNumber = accountNumber;
        this._balance = balance;
        this._accountHolder = accountHolder;
    }
    BankAccount.prototype.deposit = function (value) {
        this._balance += value;
    };
    BankAccount.prototype.withdraw = function (value) {
        if (value > this._balance) {
            throw new Error("Withdraw money is bigger than balance");
        }
        else if (this.saques == 3) {
            throw new Error("Max withdraw reached, invalid operation");
        }
        else {
            this._balance -= value;
            this.saques += 1;
        }
    };
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "accountHolder", {
        get: function () {
            return this._accountHolder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "accountNumber", {
        get: function () {
            return this._accountNumber;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
exports.BankAccount = BankAccount;
