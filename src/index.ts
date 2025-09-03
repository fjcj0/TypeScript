abstract class Animal {
    private animal: string;
    constructor(animal: string) {
        this.animal = animal;
    }
    abstract printAnimalName(animal: string): void;
    getAnimalName(): string {
        return this.animal;
    }
    setAnimalName(animal: string) {
        this.animal = animal;
    }
}
class DangerousSection extends Animal {
    printAnimalName(animal: string): void {
        console.log(`Dangerous section has animal called: ${animal}`)
    }
}
class SmallSection extends Animal {
    printAnimalName(animal: string): void {
        console.log(`Small section has animal called: ${animal}`)
    }
}
let Small = new SmallSection("Hamster");
let Dangerous = new DangerousSection("Lion");
console.log('Small Animal: ' + Small.getAnimalName());
Small.printAnimalName("Cat");
console.log('Dangerous Animal: ' + Dangerous.getAnimalName());
Dangerous.printAnimalName("Tiger");