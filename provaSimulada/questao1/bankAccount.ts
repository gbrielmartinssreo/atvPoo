export class BankAccount{
	readonly _accountNumber:number;
	private _balance:number;
	private _accountHolder:string;
	private saques:number=0;

	constructor(accountNumber:number,balance:number,accountHolder:string){
		this._accountNumber=accountNumber;
		this._balance=balance;
		this._accountHolder=accountHolder;
	}

	public deposit(value:number){
		this._balance+=value;
	}

	public withdraw(value:number){
		if(value>this._balance){
			throw new Error("Withdraw money is bigger than balance");
		}else if(this.saques==3){
			throw new Error("Max withdraw reached, invalid operation");
		}else{
			this._balance-=value;
			this.saques+=1;
		}
	}

	public get balance(){
		return this._balance;
	}

	public get accountHolder(){
		return this._accountHolder;
	}

	public get accountNumber(){
		return this._accountNumber;
	}
}
	
