import {Pessoa} from "./pessoa"
import {Turma} from "./turma"

export class Aluno extends Pessoa{
        constructor(turmasParticipadas:Turma[],nome:string){
            super(turmasParticipadas,nome);
        }

        public get nome(){
            return this._nome;
        }

        public set nome(nome:string){
            this._nome=nome;
        }

}
