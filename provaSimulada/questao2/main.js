"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var address_1 = require("./address");
var person1 = new person_1.Person("larissi", 28, new address_1.Address("Brasil", "Espírito Santo", "Baixo Guandu", "Centro", "Fernao", 1));
person1.getFullAddress();
