"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
var Disciplina = /** @class */ (function () {
    function Disciplina(nome, semestrePermite, turmas) {
        this._nome = nome;
        this.validaSemestre(semestrePermite);
        this._semestrePermite = semestrePermite;
        this._turmas = turmas;
    }
    Object.defineProperty(Disciplina.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disciplina.prototype, "semestrePermite", {
        get: function () {
            return this._semestrePermite;
        },
        set: function (semestrePermite) {
            this.validaSemestre(semestrePermite);
            this._semestrePermite = semestrePermite;
        },
        enumerable: false,
        configurable: true
    });
    Disciplina.prototype.validaSemestre = function (semestrePermite) {
        if (semestrePermite != 1 && semestrePermite != 2) {
            throw new Error("permissao de semestre invalida");
        }
    };
    Disciplina.prototype.addTurma = function (turma) {
        if (turma.getSemestreS() === this._semestrePermite) {
            this._turmas.push(turma);
        }
        throw new Error("semestre incompativel");
    };
    Disciplina.prototype.getTurmas = function () {
        return this._turmas;
    };
    return Disciplina;
}());
exports.Disciplina = Disciplina;
