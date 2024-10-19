import { Car } from "./car";

export class ElectricCar extends Car {
	private _batteryLife: number;

	constructor(owner: string, fuelType: string, batteryLife: number) {
		super(owner, fuelType);
		this._batteryLife = batteryLife;
	}

	public get fuelType() {
		return this.owner;
	}

	public set fuelType(fuelType: string) {
		this.fuelType = fuelType;
	}

	public get batteryLife() {
		return this._batteryLife;
	}

	public set batteryLife(batteryLife: number) {
		this._batteryLife = batteryLife;
	}

	public start() {
		if (this._batteryLife >= 10) {
			super.start();
			this._batteryLife -= 10;
		}
		else {
			throw new Error("Bateria baixa, carro nao ligou");
		}
	}

	public stop() {
		super.stop();
		console.log("santuario malevolente _{}_");
	}

}
