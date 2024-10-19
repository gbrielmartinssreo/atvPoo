export abstract class Vehicle{
	protected _owner:string;

	constructor(owner:string){
		this._owner=owner;
	}

	protected get owner(){
		return this._owner;
	}

	protected set owner(owner:string){
		this._owner=owner;
	}

	protected abstract start():void;
	
	protected abstract stop():void;

}

