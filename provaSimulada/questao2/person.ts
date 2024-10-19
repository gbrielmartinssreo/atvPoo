import {Address} from "./address";

export class Person {
	private _name:string;
	private _age:number;
	private _address:Address;

	constructor(name:string,age:number,address:Address){
		this._name=name;
		this._age=age;
		this._address=address;
	}

	public get name(){
		return this._name;
	}

	public set name(name:string){
		this._name=name;
	}

	public get age(){
		return this._age;
	}

	public set age(age:number){
		this._age=age;
	}

	public get address(){
		return this._address;
	}

	public set address(address:Address){
		this._address=address;
	}

	public getFullAddress(){
		console.log(`Country:${this._address.country}`);
		console.log(`State:${this._address.state}`);
		console.log(`City:${this._address.city}`);
		console.log(`Neighborhood:${this._address.neighborhood}`);
		console.log(`Street:${this._address.street}`);
		console.log(`Number:${this._address.numHouse}`);
	}

}
