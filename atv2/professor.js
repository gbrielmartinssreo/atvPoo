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
exports.Professor = void 0;
var pessoa_1 = require("./pessoa");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(turmas, nome) {
        return _super.call(this, turmas, nome) || this;
    }
    Object.defineProperty(Professor.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Professor.prototype.addTurmas = function (turma) {
        _super.prototype.addTurmas.call(this, turma);
    };
    Professor.prototype.listarDisciplinasTurmasParticipadas = function () {
        _super.prototype.listarDisciplinasTurmasParticipadas.call(this);
    };
    Professor.prototype.listarAlunosProfessor = function () {
        this._turmas.forEach(function (turma) {
            turma.listarAlunos(); // Chama o método na turma individual
        });
    };
    Professor.prototype.contTurmas = function () {
        console.log("qntTurmas=".concat(this._turmas.length));
    };
    return Professor;
}(pessoa_1.Pessoa));
exports.Professor = Professor;
