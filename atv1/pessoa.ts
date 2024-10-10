import {Turma} from "./turma"

export class Pessoa {
    protected _turmas: Turma[];
    protected _nome:string;

    constructor(turmas:Turma[],nome:string){
        this._turmas=turmas;
        this._nome=nome;
    }

    protected addTurmas(turma:Turma):void{
        this._turmas.push(turma);
    }

    protected listarDisciplinasTurmasParticipadas():void{
        for(let i=0;i<this._turmas.length;i++){
            console.log(`${this._turmas[i].disciplina.nome} ${this._turmas[i].numeroTurma}\n`);
        }
    }

    protected get nome(){
        return this._nome;
    }

    protected set nome(nome:string){
        this._nome=nome;
    }

}
