function Animal(name, weight) {
    this.name = name;
    this.weight = weight;

    this.setName = function (name) {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }

    this.setWeight = function (w) {
        this.weight = w;
    }
    this.getWeight = function () {
        return this.weight;
    }

    this.toString = function () {
        return 'name: ' + this.name + ' - weight: ' + this.weight;
    }
}

let objAnimal1 = new Animal();

objAnimal1.setName('Elephant');
objAnimal1.setWeight(45.6);

console.log(objAnimal1);
console.log(objAnimal1.toString());

let objAnimal2 = new Animal('name', 1);
console.log('before set name: ' + objAnimal2.toString());
objAnimal2.setName('Mouse');

console.log('after set name: ' + objAnimal2.toString());

