"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bankAccount_1 = require("./bankAccount");
var conta1 = new bankAccount_1.BankAccount(123, 100, "geronsio");
try {
    conta1.withdraw(150);
}
catch (error) {
    console.log(error.message);
}
try {
    conta1.withdraw(10);
}
catch (error) {
    console.log(error.message);
}
try {
    conta1.withdraw(10);
}
catch (error) {
    console.log(error.message);
}
try {
    conta1.withdraw(10);
}
catch (error) {
    console.log(error.message);
}
try {
    conta1.withdraw(10);
}
catch (error) {
    console.log(error.message);
}
conta1.deposit(200);
console.log(conta1.accountNumber);
console.log(conta1.balance);
console.log(conta1.accountHolder);
