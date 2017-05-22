// EloquentJS
// Notes Chapter 5 - Higher-Order Functions
// Albert Mas

// Abstraction of a very basic function

var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  // console.log(current);
}

var logEach = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
  }
}

// adding an action

function forEach_(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

// forEach_(["Wampeter", "Foma", "Granfalloon"], console.log);

var stringsArr = ["Wampeter", "Foma", "Granfalloon"];

// introducing 'const' => so that the value can't be reassigned
const addString = (string) => {
  (`${string} ist lecker`);
}

// We can also directly pass the function directy as a parameter without storing it in a variable, because JS is awesome
// This is actually one of the features of 'First Class Functions' in 'Functional Programming'

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach_(numbers, function(number) {
  sum += number;
});
// // console.log(sum);

// JS has it's own forEach native function, so we don't need to rewrite it

// it can do functions like 'gatherCorrelations' in ch4 shorter easier to grasp

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

// Using forEach

function gatherCorrelations(journal) {
  var phis = {};
  journal.forEach(function(entry) {
    entry.events.forEach(function(event) {
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    });
  });
  return phis;
}

// Higher-order functions
// Functions that operate on other functions, either by taking them as arguments or by returning them

function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
// // console.log(greaterThan10(11));
// → true

// Getting better at it
function unless(test, then) {
  if (!test) then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
  unless(n % 2, function() {
    // // console.log(n, "is even");
  });
});

// Ancestry file

// from JSON to js
var ancestry = JSON.parse(ANCESTRY_FILE);
// // console.log(ancestry);

// filter array, find people in ancestry born in 1924
function filter_(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

/*
console.log(filter_(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}));
*/

// The above is a pure function, doesn't delete the elements of the original array

// And we can also use the native method

/*
console.log(ancestry.filter(function(person) {
  return person.father == "Carel Haverbeke";
}));
*/

// Transforming with Map

// Here is how map works

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

// first we create a new array of people over ninety in the array

var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});

// What I find really cool is in 'overNinety' only returns values when the condition is met. Without using if conditions

// this is an array of 3 objects from ancestry

var personName = (person) => {
  return person.name;
}

// Now when doing map(overNinety, personName)
// → ["Clara Aernoudts", "Emile Haverbeke", "Maria Haverbeke"]

// Summarizing with reduce

// The reduce() method reduces the array to a single value.

// The reduce() method executes a provided function for each value of the array (from left-to-right).

// The return value of the function is stored in an accumulator (result/total).

// Reduce allows us to enter an extra parameter

function reduce_(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

/*
console.log(reduce_([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 4));
*/

// used to check for the older ancester in ancestry
/*
console.log(ancestry.reduce_(function(min, cur) {
  if (cur.born < min.born) return cur;
  else return min;
}));
// → {name: "Pauwels van Haverbeke", born: 1535, …}
*/

// Just to make it clear: the value  ancestry.reduce_ returns it is applied to the next element of the array.
// In the end the final value will be returned.

// and this is how it would look if we had not used Higher order functions
var min = ancestry[0];
for (var i = 1; i < ancestry.length; i++) {
  var cur = ancestry[i];
  if (cur.born < min.born)
    min = cur;
}
// // console.log(min);
// → {name: "Pauwels van Haverbeke", born: 1535, …}

// Composability
// When we compose functions is when higher-order functions start to shine
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
// → 61.67
console.log(average(ancestry.filter(female).map(age)));
// → 54.56

// The Cost
// Take into consideration that
// using forEach instead of a for loop
// or making steps that produce new arrays
// looks elegant, but it is ineficient
// with superfast computers of nowadays this may not be a problem most of times...
// Careful with complex functions in nested loops
// the function will run NxM times being N the outer loop and M the inner.

// Great-great-great-great-...

// Build up an object that associates names with people.

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]);

// Note that the following function only deals with one person
// if person not in array, returns dafaultValue, which equals 0
// else returns the f function with the specified 3 paramenter

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null)
      return defaultValue;
    else
      return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]));
  }
  return valueFor(person);
}

// Now we write our f → sharedDNA

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke")
    return 1;
  else
    return (fromMother + fromFather) / 2;
}

// And finally we can use everything

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);

// We divide by 4 because with the function we get the share the autor's gradfather from Pawels van Haverbeke has
// The author has a 4th of his grandfather's DNA (divided 2 a la 2 → half of his dad and who has half of his own dad)

// Since when it hits Pauwels van Haverbeke it will return 1 and this will get divided over an over

// If the byName person object doesn't exist it will return undefined (but according to line 243 should be null?)
// Assuming that it works then it would just return the default value 0

// Find the percentage of a person’s known ancestors who lived past 70

function countAncestors(person, test) {
  function combine(current, fromMother, fromFather) {
    var thisOneCounts = current != person && test(current);
    return fromMother + fromFather + (thisOneCounts ? 1 : 0);
  }
  return reduceAncestors(person, combine, 0);
}

//Note that trough the use of operators(l 278), conditions are not needed

function longLivingPercentage(person) {
  var all = countAncestors(person, function(person) {
    return true;
  });
  var longLiving = countAncestors(person, function(person) {
    return (person.died - person.born) >= 70;
  });
  return longLiving / all;
}
// console.log(longLivingPercentage(byName["Emile Haverbeke"]));
// → 0.129

// Needs further analisys

// Binding

var theSet = ["Carel Haverbeke", "Maria van Brussel",
              "Donald Duck"];
function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}

/*
console.log(ancestry.filter(function(person) {
  return isInSet(theSet, person);
}));
*/

// The same using bind

// console.log(ancestry.filter(isInSet.bind(null, theSet)));

