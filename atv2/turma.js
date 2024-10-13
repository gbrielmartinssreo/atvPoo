"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turma = void 0;
var Turma = /** @class */ (function () {
    function Turma(disciplina, numeroTurma, professor, alunos, semestre) {
        this._disciplina = disciplina;
        this._numeroTurma = numeroTurma;
        this._professor = professor;
        this._alunos = alunos;
        this._semestre = semestre;
    }
    Object.defineProperty(Turma.prototype, "disciplina", {
        get: function () {
            return this._disciplina;
        },
        set: function (disciplina) {
            this._disciplina = disciplina;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Turma.prototype, "numeroTurma", {
        get: function () {
            return this._numeroTurma;
        },
        set: function (numeroTurma) {
            this._numeroTurma = numeroTurma;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Turma.prototype, "professor", {
        get: function () {
            return this._professor;
        },
        set: function (professor) {
            this._professor = professor;
            professor.addTurmas(this);
        },
        enumerable: false,
        configurable: true
    });
    Turma.prototype.impProfessor = function () {
        console.log("".concat(this._professor.nome));
    };
    Turma.prototype.addAluno = function (aluno) {
        this._alunos.push(aluno);
        aluno.addTurmas(this);
    };
    Turma.prototype.listarAlunos = function () {
        if (this._alunos.length > 0) {
            for (var i = 0; i < this._alunos.length; i++)
                console.log("".concat(this._alunos[i].nome));
        }
    };
    Object.defineProperty(Turma.prototype, "semestre", {
        get: function () {
            var s = this._semestre.slice(0, -2);
            var sNum = parseInt(s, 10);
            return sNum;
        },
        set: function (semestre) {
            this._semestre = semestre;
        },
        enumerable: false,
        configurable: true
    });
    Turma.prototype.getSemestreS = function () {
        var s = this._semestre.slice(-1);
        var sNum = parseInt(s, 10);
        return sNum;
    };
    return Turma;
}());
exports.Turma = Turma;
