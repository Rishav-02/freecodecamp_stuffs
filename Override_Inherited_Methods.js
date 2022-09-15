//Override Inherited Methods

/* you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:

Syntax: ChildObject.prototype = Object.create(ParentObject.prototype);

Then the ChildObject received its own methods by chaining them onto its prototype:

Syntax: ChildObject.prototype.methodName = function() {...};

It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. Here's an example of Bird overriding the eat() method inherited from Animal: */

//Question:-Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.


function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function(){
  return "Alas, this is a flightless bird.";
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());