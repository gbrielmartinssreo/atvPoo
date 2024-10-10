import { Turma } from "./turma";
import { Pessoa } from "./pessoa";
import { Disciplina } from "./disciplina";
import { Curso } from "./curso";
import { Aluno } from "./aluno";

export class Professor extends Pessoa {
        constructor(turmas:Turma[],nome:string){
            super(turmas,nome);
        }

        public get nome(){
            return this._nome;
        }

        public set nome(nome:string){
            this._nome=nome;
        }

        public addTurmas(turma:Turma):void{
                super.addTurmas(turma);
        }

        public listarDisciplinasTurmasParticipadas():void{
                super.listarDisciplinasTurmasParticipadas();
        }

        public listarAlunosProfessor() {
                this._turmas.forEach(turma => { // Use um nome diferente, como "turma"
                     turma.listarAlunos();       // Chama o método na turma individual
                });
        }


    public contTurmas(){
            console.log(`qntTurmas=${this._turmas.length}`);
        }

}
