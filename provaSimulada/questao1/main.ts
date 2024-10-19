import {BankAccount} from "./bankAccount";

let conta1 = new BankAccount(123,100,"geronsio");

try{
	conta1.withdraw(150);
}
catch(error:any){
	console.log(error.message);
}

try{
	conta1.withdraw(10);
}
catch(error:any){
	console.log(error.message);
}

try{
	conta1.withdraw(10);
}
catch(error:any){
	console.log(error.message);
}

try{
	conta1.withdraw(10);
}
catch(error:any){
	console.log(error.message);
}

try{
	conta1.withdraw(10);
}
catch(error:any){
	console.log(error.message);
}

conta1.deposit(200);

console.log(conta1.accountNumber);
console.log(conta1.balance);
console.log(conta1.accountHolder);

