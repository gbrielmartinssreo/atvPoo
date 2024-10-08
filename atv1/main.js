"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curso_1 = require("./curso");
var aluno_1 = require("./aluno");
var professor_1 = require("./professor");
var turma_1 = require("./turma");
var disciplina_1 = require("./disciplina");
// Criando instâncias
var aluno1 = new aluno_1.Aluno([], "thiago");
var aluno2 = new aluno_1.Aluno([], "jair bozonaro");
var professor1 = new professor_1.Professor([], "boules");
var turmaVe1 = new turma_1.Turma(1, professor1, [], "Gol"); // Atribuindo o professor à turma
var poo = new disciplina_1.Disciplina("Programacao orientada a objetos", 2, [turmaVe1]); // Adicionando turma à disciplina
var engcomp = new curso_1.Curso([]);
// Adicionando disciplinas ao curso
engcomp.addDisciplina(poo);
// Exemplos de uso:
console.log("Turmas do professor:");
professor1.listarTurmasParticipadas();
console.log("Disciplinas do curso:");
engcomp.listarDisciplinas();
// Mais exemplos de uso...
