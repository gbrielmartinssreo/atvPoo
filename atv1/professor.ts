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

        public addTurmasParticipadas(turma:Turma):void{
                super.addTurmasParticipadas(turma);
        }

        public listarDisciplinasTurmasParticipadas():void{
                super.listarTurmasParticipadas();
        }

        public listarAlunosProfessor(){
            this._turmas.forEach(this._turmas=>{
                this._turmas.listarAlunos();
            });
        }

}
