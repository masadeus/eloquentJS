// EloquentJS
// Notes Chapter 6 - The Secret Life of Objects
// Albert Mas

// Methods & "this"

// Methods are simply properties that hold function values. This is a simple method:

var rabbit = {};
rabbit.speak = function(line) {
  console.log("The rabbit says '" + line + "'");
};

// rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'

// When a function is called as a method the special variable this in its body will point to the object that it was called on.

function speak(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
fatRabbit.speak("I could sure use a carrot right now.");
// → The fat rabbit says 'I could sure use a carrot
//   right now.'

// The apply and bind methods both take a first argument that can be used to simulate method calls.
// This first argument is in fact used to give a value to this.

// the CALL method
//  It also calls the function it is a method of but takes its arguments normally, rather than as an array.
// Like apply and bind, call can be passed a specific this value.

speak.apply(fatRabbit, ["Burp!"]);
// → The fat rabbit says 'Burp!'
speak.call({type: "old"}, "Oh my.");
// → The old rabbit says 'Oh my.'

// PROTOTYPES

// A prototype is another object that is used as a fallback source of properties.
// When an object gets a request for a property that it does not have, its prototype will be searched for the property
// then the prototype’s prototype, and so on.
// You can use Object.create to create an object with a specific prototype.

var protoRabbit = {
  speak: function(line) {
    console.log("The " + this.type + " rabbit says '" +
                line + "'");
  }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

// The “proto” rabbit acts as a container for the properties that are shared by all rabbits.
// An individual rabbit object, like the killer rabbit, contains properties that apply only to itself—in this case its type—
// and derives shared properties from its prototype.

// CONSTRUCTORS

// A constructor is a more convenient way to create an objects that derive from some shared prototype
// it uses the work "new" in front
// The constructor, when called, will return a fresh object  with the this variable bound to it.
// There is the convention to capitalize constructors

function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);
// → black

// Constructors (in fact, all functions) automatically get a property named.
// Every instance created with this constructor will have this object as its prototype.
// So to add a speak method to rabbits created with the Rabbit constructor, we can simply do this:

Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
};
blackRabbit.speak("Doom...");
// → The black rabbit says 'Doom...'

// Its prototype property will be the prototype of instances created through it but is not its own prototype.
// So blackRabbit.prototype will be the object Rabbit.
// The prototype of a constructor is Function.prototype since constructors are functions,
// we can retireve it by using Object.getPrototypeOf

// Overriding derived properties
// Can be useful to express exceptional properties in instances of a more generic class of objects
// while letting the nonexceptional objects simply take a standard value from their prototype

Rabbit.prototype.teeth = "small";
// console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
// console.log(killerRabbit.teeth);
// → long, sharp, and bloody
// console.log(blackRabbit.teeth);
// → small
// console.log(Rabbit.prototype.teeth);
// → small

// Prototype interference

Object.prototype.nonsense = "hi";
for (var name in map)
  console.log(name);
// → pizza
// → touched tree
// → nonsense
console.log("nonsense" in map);
// → true
console.log("toString" in map);
// → true

// Delete the problematic property again
delete Object.prototype.nonsense;

// It is showing the nonsense value bacause it is what is called an ennumerable propperty.
// The prototype properties are usually nonenumerable, and this can also be than like this

Object.defineProperty(Object.prototype, "hiddenNonsense",
                      {enumerable: false, value: "hi"});
for (var name in map)
  console.log(name);
// → pizza
// → touched tree
console.log(map.hiddenNonsense);
// → hi

// It doesn't show inthe loop, but we can still access it.

// To ba on the save side it is better to use the hasOwnProperty method
// which will then only check the instance properties

console.log(map.hasOwnProperty("toString"));
// → false

for (var name in map) {
  if (map.hasOwnProperty(name)) {
    // ... this is an own property
  }
}

// Prototype-less objects

// it can also be done passing the paramenter null the the method Object.create

var map = Object.create(null);
map["pizza"] = 0.069;
// console.log("toString" in map);
// → false
// console.log("pizza" in map);
// → true

// Polymorphism
// When the author defines interface it referes to the functions themselves and its naming, since it is how we will interact with the program
// So polyphormism is about making code being able to work with values of different shapes as long as it suports the instance (a specific method)
// So if you  spply toString to an array it will return string of the elements separated by comma (like join)
// but if you apply it to an abject it is gonna return [object Object].
// If you the to String method to an array it will return then

// console.log(Object.prototype.toString.call([1, 2]));
// → [object Array]

// But all those objects support toString, and will return something meaningfull.
// this is Polyphormism
