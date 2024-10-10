import {Disciplina} from "./disciplina"

export class Curso{
	private _disciplinas:Disciplina[];

	constructor(disciplinas:Disciplina[]){
		this._disciplinas=disciplinas;
	}

	public addDisciplina(disciplina:Disciplina):void{
		this._disciplinas.push(disciplina);
		disciplina.curso=this;
	}

	public listarDisciplinas(){
		for(let i=0;i<this._disciplinas.length;i++){
			console.log(`${this._disciplinas[i].nome}\n`);
		}
	}

	public getDisciplinas(){
		return this._disciplinas;
	}

}
