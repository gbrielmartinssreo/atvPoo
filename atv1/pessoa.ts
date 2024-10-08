import {Turma} from "./turma"

export class Pessoa {
    protected _turmasParticipadas: Turma[];
    protected _nome:string;

    constructor(turmasParticipadas:Turma[],nome:string){
        this._turmasParticipadas=turmasParticipadas;
        this._nome=nome;
    }

    protected addTurmasParticipadas(turma:Turma):void{
        this._turmasParticipadas.push(turma);
    }

    protected listarTurmasParticipadas():void{
        for(let i=0;i<this._turmasParticipadas.length;i++){
            console.log(`${this._turmasParticipadas[i]}\n`);
        }
    }

    protected get nome(){
        return this._nome;
    }

    protected set nome(nome:string){
        this._nome=nome;
    }

}
