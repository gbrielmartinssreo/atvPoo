import {Vehicle} from "./vehicle";

export class Car extends Vehicle{
	protected _fuelType:string;

	constructor(owner:string,fuelType:string){
		super(owner);
		this._fuelType=fuelType;
	}

	protected get fuelType(){
		return this._fuelType;
	}

	protected set fuelType(fuelType:string){
		this._fuelType=fuelType;
	}

	protected start(){
		console.log("O carro ligou");
	}

	protected stop(){
		console.log("O carro desligou");
	}

}
