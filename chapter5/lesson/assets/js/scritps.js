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

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);

var stringsArr = ["Wampeter", "Foma", "Granfalloon"];

// introducing 'const' => so that the value can't be reassigned
const addString = (string) => {
  console.log(`${string} ist lecker`);
}

