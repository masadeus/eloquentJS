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
