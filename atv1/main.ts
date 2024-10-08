import { Curso } from "./curso";
import { Aluno } from "./aluno";
import { Professor } from "./professor";
import { Turma } from "./turma";
import { Disciplina } from "./disciplina";

// Criando instâncias
let aluno1 = new Aluno([], "thiago");
let aluno2 = new Aluno([], "jair bozonaro");
let professor1 = new Professor([], "boules");
let turmaVe1 = new Turma(1, professor1, [], "Gol"); // Atribuindo o professor à turma
let poo = new Disciplina("Programacao orientada a objetos", 2, [turmaVe1]); // Adicionando turma à disciplina
let engcomp = new Curso([]);

// Adicionando disciplinas ao curso
engcomp.addDisciplina(poo);

// Exemplos de uso:
console.log("Turmas do professor:");
professor1.listarTurmasParticipadas();

console.log("Disciplinas do curso:");
engcomp.listarDisciplinas();

// Mais exemplos de uso...
