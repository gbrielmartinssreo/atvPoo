"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curso_1 = require("./curso");
var disciplina_1 = require("./disciplina");
var turma_1 = require("./turma");
var professor_1 = require("./professor");
var aluno_1 = require("./aluno");
// Criando instâncias de Curso, Disciplina, Turma, Professor e Aluno
var engcomp = new curso_1.Curso([]);
var poo = new disciplina_1.Disciplina(undefined, "POO", 2, []);
var webdev = new disciplina_1.Disciplina(undefined, "Desenvolvimento Web", 2, []);
var turmaPooV1 = new turma_1.Turma(undefined, 1, undefined, [], "2022/1");
var turmaWebdevV1 = new turma_1.Turma(undefined, 1, undefined, [], "2022/2");
var renan = new professor_1.Professor([], "Renan");
var joao = new professor_1.Professor([], "João");
var thiago = new aluno_1.Aluno([], "Thiago");
var maria = new aluno_1.Aluno([], "Maria");
var pedro = new aluno_1.Aluno([], "Pedro");
// Associando disciplinas ao curso
engcomp.addDisciplina(poo);
engcomp.addDisciplina(webdev);
// Associando turmas às disciplinas
try {
    poo.addTurma(turmaPooV1);
}
catch (erro) {
    console.log(erro.message);
    process.exit(1);
}
try {
    webdev.addTurma(turmaWebdevV1);
}
catch (erro) {
    console.log(erro.message);
    process.exit(1);
}
// Associando professores e alunos às turmas
turmaPooV1.professor = renan;
turmaPooV1.addAluno(thiago);
turmaPooV1.addAluno(maria);
turmaWebdevV1.professor = joao;
turmaWebdevV1.addAluno(pedro);
console.log("--- Testando a funcionalidade do sistema ---\n");
// 1. Contagem de turmas de um professor
console.log("1. Quantidade de turmas ministradas por Renan:");
renan.contTurmas();
console.log("\n");
// 2. Listagem de disciplinas ministradas por um professor
console.log("2. Disciplinas ministradas por Renan:");
renan.listarDisciplinasTurmasParticipadas();
console.log("\n");
// 3. Listagem de alunos de uma turma
console.log("3. Alunos da turma de POO:");
turmaPooV1.listarAlunos();
console.log("\n");
// 4. Listagem de alunos que tiveram aulas com um professor
console.log("4. Alunos que tiveram aulas com Renan:");
renan.listarAlunosProfessor();
console.log("\n");
// 5. Listagem de disciplinas de um curso
console.log("5. Disciplinas do curso de Engenharia de Computação:");
engcomp.listarDisciplinas();
console.log("\n");
