export class Address{
	private _country:string;
	private _state:string;
	private _city:string;
	private _neighborhood:string;
	private _street:string;
	private _numHouse:number;

	constructor(country:string,state:string,city:string,neighborhood:string,street:string,numHouse:number){
		this._country=country;
		this._state=state;
		this._city=city;
		this._neighborhood=neighborhood;
		this._street=street;
		this._numHouse=numHouse;
	}

	public get country(){
		return this._country;
	}
	
	public set country(country:string){
		this._country=country;
	}

	public get state(){
		return this._state;
	}
	
	public set state(state:string){
		this._state=state;
	}

	public get city(){
		return this._city;
	}
	
	public set city(city:string){
		this._city=city;
	}


	public get neighborhood(){
		return this._neighborhood;
	}

	public set neighborhood(neighborhood:string){
		this._neighborhood=neighborhood;
	}

	public get street(){
		return this._street;
	}

	public set street(street:string){
		this._street=street;
	}

	public get numHouse(){
		return this._numHouse;
	}

	public set numHouse(numHouse:number){
		this._numHouse=numHouse;
	}
}
