"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(disciplinas) {
        this._disciplinas = disciplinas;
    }
    Curso.prototype.addDisciplina = function (disciplina) {
        this._disciplinas.push(disciplina);
        disciplina.curso = this;
    };
    Curso.prototype.listarDisciplinas = function () {
        for (var i = 0; i < this._disciplinas.length; i++) {
            console.log("".concat(this._disciplinas[i].nome, "\n"));
        }
    };
    return Curso;
}());
exports.Curso = Curso;
