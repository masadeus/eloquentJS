// EloquentJS
// Notes Chapter 5 - Higher-Order Functions
// Albert Mas

// Abstraction of a very basic function

var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}

var logEach = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// adding an action

function forEach_(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

forEach_(["Wampeter", "Foma", "Granfalloon"], console.log);

var stringsArr = ["Wampeter", "Foma", "Granfalloon"];

// introducing 'const' => so that the value can't be reassigned
const addString = (string) => {
  console.log(`${string} ist lecker`);
}

// We can also directly pass the function directy as a parameter without storing it in a variable, because JS is awesome
// This is actually one of the features of 'First Class Functions' in 'Functional Programming'

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach_(numbers, function(number) {
  sum += number;
});
console.log(sum);

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
console.log(greaterThan10(11));
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
    console.log(n, "is even");
  });
});

// Ancestry file

// from JSON to js
var ancestry = JSON.parse(ANCESTRY_FILE);

console.log(ancestry.length);
