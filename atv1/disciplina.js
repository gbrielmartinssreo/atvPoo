"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
var Disciplina = /** @class */ (function () {
    function Disciplina(curso, nome, semestrePermite, turmas) {
        this._curso = curso;
        this._nome = nome;
        this._semestrePermite = semestrePermite;
        this._turmas = turmas;
    }
    Object.defineProperty(Disciplina.prototype, "curso", {
        get: function () {
            return this._curso;
        },
        set: function (curso) {
            this._curso = curso;
        },
        enumerable: false,
        configurable: true
    });
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
            this._semestrePermite = semestrePermite;
        },
        enumerable: false,
        configurable: true
    });
    Disciplina.prototype.addTurma = function (turma) {
        if (turma.getSemestreS() === this._semestrePermite) {
            this._turmas.push(turma);
            turma.disciplina = this;
        }
        else {
            throw new Error("semestre incompativel da turma ".concat(turma.numeroTurma));
        }
    };
    return Disciplina;
}());
exports.Disciplina = Disciplina;
