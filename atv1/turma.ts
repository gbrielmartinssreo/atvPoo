import {Disciplina} from "./disciplina";
import {Professor} from "./professor";
import {Aluno} from "./aluno";

export class Turma{
	private _disciplina:Disciplina;
	private _numeroTurma:number;
	private _professor:Professor;
	private _alunos:Aluno[];
	private _semestre:string;

	constructor(disciplina:Disciplina,numeroTurma:number,professor:Professor,alunos:Aluno[],semestre:string){
		this._disciplina=disciplina;
		this._numeroTurma=numeroTurma;
		this._professor=professor;
		this._alunos=alunos;
		this._semestre=semestre;
	}


	public get disciplina(){
		return this._disciplina;
	}

	public set disciplina(disciplina:Disciplina){
		this._disciplina=disciplina;
	}

	public get numeroTurma(){
		return this._numeroTurma;
	}

	public set numeroTurma(numeroTurma:number){
		this._numeroTurma=numeroTurma;
	}

	public get professor(){
		return this._professor;
	}

	public set professor(professor:Professor){
		this._professor=professor;
		professor.addTurmas(this);
	}

	public impProfessor(){
		console.log(`${this._professor.nome}`);
	}

	public addAluno(aluno:Aluno){
		this._alunos.push(aluno);
		aluno.addTurmas(this);
	}

	public listarAlunos(){
		if(this._alunos.length>0) {
			for (let i = 0; i < this._alunos.length; i++)
				console.log(`${this._alunos[i].nome}`);
		}
	}

	public set semestre(semestre:string){
		this._semestre=semestre;
	}

	public get semestre():number{
		let s=this._semestre.slice(0,-2);
		let sNum=parseInt(s,10);
		return sNum;
	}

	public getSemestreS():number{
		let s=this._semestre.slice(-1);
		let sNum=parseInt(s,10);
		return sNum;
	}

}


	



	
