import {Professor} from "./professor";
import {Aluno} from "./aluno";

export class Turma{
	private _numeroTurma:number;
	private _professor:Professor;
	private _alunos:Aluno[];
	private _semestre:string;

	constructor(numeroTurma:number,professor:Professor,alunos:Aluno[],semestre:string){
		this._numeroTurma=numeroTurma;
		this._professor=professor;
		this._alunos=alunos;
		this._semestre=semestre;
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

	public impProfessor(){
		console.log(`${this._professor}`);
	}

	public addAluno(aluno:Aluno){
		this._alunos.push(aluno);
		aluno.addTurmasParticipadas(this);
	}

	public listarAlunos(){
		for(let i=0;i<this._alunos.length;i++)
			console.log(`${this._alunos[i]}`);
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

	public getAlunos(){
		return this._alunos;
	}

	public set professor(professor:Professor){
		this._professor=professor;
		this._professor.addTurmasParticipadas(this);
	}
}


	



	
