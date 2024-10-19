import { Vehicle } from "./vehicle";
import { ElectricCar } from "./eletricCar";
import { Car } from "./car";
import { Bike } from "./bike";

const carroEletrico1 = new ElectricCar("gustavao", "eletron", 50);
carroEletrico1.start;
carroEletrico1.stop();
carroEletrico1.start();