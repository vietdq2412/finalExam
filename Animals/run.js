let objAnimal1 = new Animal();

objAnimal1.setName('Elephant');
objAnimal1.setWeight(45.6);

console.log(objAnimal1);
console.log(objAnimal1.toString());

let objAnimal2 = new Animal('obj2_name', 1);
console.log('before set name: ' + objAnimal2.toString());
objAnimal2.setName('Mouse');

console.log('after set name: ' + objAnimal2.toString());