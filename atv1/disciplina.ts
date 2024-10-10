import {Curso} from "./curso"
import {Turma} from "./turma"

export class Disciplina{
	private _curso:Curso;
	private _nome:string;
	private _semestrePermite:number;
	private _turmas:Turma[];

	constructor(curso:Curso,nome:string,semestrePermite:number,turmas:Turma[]){
		this._curso=curso;
		this._nome=nome;
		this._semestrePermite=semestrePermite;
		this._turmas=turmas;
	}

	public get curso(){
		return this._curso;
	}

	public set curso(curso:Curso){
		this._curso=curso;
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
		this._semestrePermite=semestrePermite;
	}

	public addTurma(turma:Turma):void{
		if(turma.getSemestreS() === this._semestrePermite){
			this._turmas.push(turma);
			turma.disciplina=this;
		}
		else{
			throw new Error(`semestre incompativel da turma ${turma.numeroTurma}`);
		}

	}
}
