import { COLORS } from "../helpers/colors.ts";

/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */
class Computer {

    public cpu: string = "cpu - not defined";
    public ram: string = 'ram - no defined';
    public storage: string = 'storage-no defined';
    public gpu?: string;

    displayConfiguration() {
        console.log('Configuración de la computadora')
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`MEMORIA DE ALMACENAMIENTO: ${this.storage}`)
        console.log(`MEMORIA GRAFICA: ${this.gpu ?? 'No tienen GPU'}`)
    }


}

class ComputerBuilder {

    private computer: Computer;
    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;

        return this;
    }
    setRAM(ram: string): ComputerBuilder {
        this.computer.ram = ram;

        return this;
    }
    setStorgae(storage: string): ComputerBuilder {
        this.computer.storage = storage;

        return this;
    }
    setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;

        return this;
    }
    build() {
        return this.computer;
    }



}


function main() {
    const basicComputer = new ComputerBuilder()
        .setCPU('Intel Core 2 Duo')
        .setRAM('4GB')
        .setStorgae('256GB')
        .build();


    console.log('%cComputadora basica:', COLORS.blue)

    basicComputer.displayConfiguration();

    const gamerComputer = new ComputerBuilder()
        .setCPU('COREi8-10G')
        .setRAM('64GB')
        .setStorgae('2TB')
        .setGPU('4080RTX')
        .build();
    console.log('%cComputadora gamer', COLORS.red)
    gamerComputer.displayConfiguration();

}
main();