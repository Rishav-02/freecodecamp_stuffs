//Reset an Inherited Constructor Property

//When an object inherits its prototype from another object, it also inherits the supertype's constructor property.


//Question:-Fix the code so duck.constructor and beagle.constructor return their respective constructors.


function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

let duck = new Bird();
duck.constructor=Bird;
let beagle = new Dog();
beagle.constructor=Dog;
