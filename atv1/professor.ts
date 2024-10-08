import { Turma } from "./turma";
import { Pessoa } from "./pessoa";
import { Disciplina } from "./disciplina";
import { Curso } from "./curso";
import { Aluno } from "./aluno";

export class Professor extends Pessoa {

  constructor(turmasParticipadas: Turma[], nome: string) {
    super(turmasParticipadas, nome);
  }

  public encontrarDisciplinasMinistradas(curso: Curso): Disciplina[] {
    const disciplinasMinistradas: Disciplina[] = [];

    disciplinasMinistradas.forEach(disciplina => {
      const turmasDoProfessor = disciplina.getTurmas().filter(turma => turma.professor=== this);

      if (turmasDoProfessor.length > 0) {
        disciplinasMinistradas.push(disciplina);
      }
    });

    return disciplinasMinistradas;
  }

  public listarDisciplinasMinistradas(curso: Curso): void {
    const disciplinas = this.encontrarDisciplinasMinistradas(curso);

    if (disciplinas.length > 0) {
      console.log(`Disciplinas ministradas por ${this.nome}:`);
      disciplinas.forEach(disciplina => {
        console.log(`- ${disciplina.nome}`);
      });
    } else {
      console.log(`O professor ${this.nome} não ministra nenhuma disciplina neste curso.`);
    }
  }

  public listarAlunos(curso: Curso): void {
    const alunos: Aluno[] = [];

    this._turmasParticipadas.forEach(turma => {
      turma.getAlunos().forEach(aluno => {
        alunos.push(aluno);
      });
    });

    if (alunos.length > 0) {
      console.log(`Alunos do Professor ${this.nome}:`);
      alunos.forEach(aluno => {
        console.log(`- ${aluno.nome}`);
      });
    } else {
      console.log(`O professor ${this.nome} não tem alunos neste curso.`);
    }
  }
}
