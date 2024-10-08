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
    function Professor(turmasParticipadas, nome) {
        return _super.call(this, turmasParticipadas, nome) || this;
    }
    Professor.prototype.encontrarDisciplinasMinistradas = function (curso) {
        var _this = this;
        var disciplinasMinistradas = [];
        disciplinasMinistradas.forEach(function (disciplina) {
            var turmasDoProfessor = disciplina.getTurmas().filter(function (turma) { return turma.professor === _this; });
            if (turmasDoProfessor.length > 0) {
                disciplinasMinistradas.push(disciplina);
            }
        });
        return disciplinasMinistradas;
    };
    Professor.prototype.listarDisciplinasMinistradas = function (curso) {
        var disciplinas = this.encontrarDisciplinasMinistradas(curso);
        if (disciplinas.length > 0) {
            console.log("Disciplinas ministradas por ".concat(this.nome, ":"));
            disciplinas.forEach(function (disciplina) {
                console.log("- ".concat(disciplina.nome));
            });
        }
        else {
            console.log("O professor ".concat(this.nome, " n\u00E3o ministra nenhuma disciplina neste curso."));
        }
    };
    Professor.prototype.listarAlunos = function (curso) {
        var alunos = [];
        this._turmasParticipadas.forEach(function (turma) {
            turma.getAlunos().forEach(function (aluno) {
                alunos.push(aluno);
            });
        });
        if (alunos.length > 0) {
            console.log("Alunos do Professor ".concat(this.nome, ":"));
            alunos.forEach(function (aluno) {
                console.log("- ".concat(aluno.nome));
            });
        }
        else {
            console.log("O professor ".concat(this.nome, " n\u00E3o tem alunos neste curso."));
        }
    };
    Professor.prototype.addTurmasParticipadas = function (turma) {
        _super.prototype.addTurmasParticipadas.call(this, turma);
    };
    Professor.prototype.listarTurmasParticipadas = function () {
        _super.prototype.listarTurmasParticipadas.call(this);
    };
    return Professor;
}(pessoa_1.Pessoa));
exports.Professor = Professor;
