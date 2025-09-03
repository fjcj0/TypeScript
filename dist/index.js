"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    animal;
    constructor(animal) {
        this.animal = animal;
    }
    getAnimalName() {
        return this.animal;
    }
    setAnimalName(animal) {
        this.animal = animal;
    }
}
class DangerousSection extends Animal {
    printAnimalName(animal) {
        console.log(`Dangerous section has animal called: ${animal}`);
    }
}
class SmallSection extends Animal {
    printAnimalName(animal) {
        console.log(`Small section has animal called: ${animal}`);
    }
}
let Small = new SmallSection("Hamster");
let Dangerous = new DangerousSection("Lion");
console.log('Small Animal: ' + Small.getAnimalName());
Small.printAnimalName("Cat");
console.log('Dangerous Animal: ' + Dangerous.getAnimalName());
Dangerous.printAnimalName("Tiger");
//# sourceMappingURL=index.js.map