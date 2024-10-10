"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(turmas, nome) {
        this._turmas = turmas;
        this._nome = nome;
    }
    Pessoa.prototype.addTurmas = function (turma) {
        this._turmas.push(turma);
    };
    Pessoa.prototype.listarDisciplinasTurmasParticipadas = function () {
        for (var i = 0; i < this._turmas.length; i++) {
            console.log("".concat(this._turmas[i].disciplina.nome, " ").concat(this._turmas[i].numeroTurma, "\n"));
        }
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
