import {Professor} from "./professor";
import {Aluno} from "./aluno";

export class Turma{
	private _numeroTurma:number;
	private _professor:Professor;
	private _alunos:Aluno[];
	private _semestre:string;

	constructor(numeroTurma:number,professor:Professor,alunos:Aluno,semestre:number){
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

	public addProfessor(professor:Professor):void{
		this._professor=professor;
	}

	public impProfessor(){
		console.log(`${this._professor}`);
	}

	public addAluno(aluno:Aluno){
		this._alunos.push(aluno);
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

	public getSemestreS():string{
		let s=this._semestre.slice(-2);
		return s;
	}
}


	



	
