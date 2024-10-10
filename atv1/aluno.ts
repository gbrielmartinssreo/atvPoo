import {Pessoa} from "./pessoa"
import {Turma} from "./turma"

export class Aluno extends Pessoa{
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

}
