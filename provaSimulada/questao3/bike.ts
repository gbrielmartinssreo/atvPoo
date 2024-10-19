import {Vehicle} from "./vehicle"

export class Bike extends Vehicle{
	constructor(owner:string){
		super(owner);
	}

	public get owner(){
		return this.owner;
	}

	public set owner(owner:string){
		this.owner=owner;
	}

	public start(){
		console.log("Pé na tabua");
	}

	public stop(){
		console.log("Freiando...");
	}
}
