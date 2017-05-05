// Data structures

// Further arrayology

var todoList = ['dust', 'vacuum', 'dishes'];


function rememberTo(task) {
  todoList.push(task);
  return todoList;
}

var whatIsNext = (task) => {
  return todoList.shift();
}

var urgentlyRememberTo = (task) => {
  todoList.unshift(task);
  return todoList;
}

//console.log([1, 2, 3, 2, 1].indexOf(2));

//console.log([1,2,3,4,2,1].lastIndexOf(2));

//console.log([1,2,3,4,2,1].slice(2, 4));


//console.log([1,2,3,4,2,1].concat(['a','b','c']));

function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}

var arrayRay = ['a', 'b', 'c', 'd', 'e', 'f'];

// Strings



var coconuts = "coconuts";

var resultant = "coconuts".slice(4,7);

//console.log(resultant);

//console.log("meeeeow".indexOf('eow'));

//console.log("  hey hey  halo  ".trim());

//console.log("  hey hey  halo  ");

//console.log(coconuts.charAt(5));

//console.log(coconuts[5]);

function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}

var rndm = Math.random();

console.log(rndm);
console.log(Math.floor(rndm*10));
console.log(Math.ceil(rndm*10));
console.log(Math.round(rndm*10));

var zzz = "aaa";


// AND NOW TIME FOR THE EXERCICES
