"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(turmasParticipadas, nome) {
        this._turmasParticipadas = turmasParticipadas;
        this._nome = nome;
    }
    Pessoa.prototype.addTurmasParticipadas = function (turma) {
        this._turmasParticipadas.push(turma);
    };
    Pessoa.prototype.listarTurmasParticipadas = function () {
        for (var i = 0; i < this._turmasParticipadas.length; i++) {
            console.log("".concat(this._turmasParticipadas[i], "\n"));
        }
        console.log("penis");
    };
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
