import {Turma} from "./turma"

export class Disciplina{
	private _nome:string;
	private _semestrePermite:number;
	private _turmas:Turma[];

	constructor(nome:string,semestrePermite:number,turmas:Turma[]){
		this._nome=nome;
		this.validaSemestre(semestrePermite);
		this._semestrePermite=semestrePermite;
		this._turmas=turmas;
	}

	public get nome(){
		return this._nome;
	}

	public set nome(nome:string){
		this._nome=nome;
	}

	public get semestrePermite(){
		return this._semestrePermite;
	}

	public set semestrePermite(semestrePermite:number){
		this.validaSemestre(semestrePermite);
		this._semestrePermite=semestrePermite;
	}

	public validaSemestre(semestrePermite:number):void{
		if(semestrePermite != 1 && semestrePermite !=2){
			throw new Error("permissao de semestre invalida");
		}
	}
	
	public addTurma(turma:Turma):void{
		if(turma.getSemestreS() === this._semestrePermite){
			this._turmas.push(turma);
		}
		throw new Error("semestre incompativel");
	
	}

	public getTurmas(){
		return this._turmas;
	}
}
