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

// console.log(rndm);
// console.log(Math.floor(rndm*10));
// console.log(Math.ceil(rndm*10));
// console.log(Math.round(rndm*10));

var zzz = "aaa";

// tirar un dau -> donarà un valor entre 0 i 6
// console.log(Math.round(Math.random()*6));

// AND NOW TIME FOR THE EXERCICES

// Sum of a range

function range (start, end) {
  var arrRange = []
  for (i = start; i <= end; i++) {
    arrRange.push(i);
  }
  return arrRange
}

function sumRange (arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
 return sum
}

// already works because for step = 1 because if step not given it equals it to 1
function rangeStepPart (start, end, step){
  var arr = range(start, end);
  var sum = 0;
  var i = 0;
  while(i < arr.length){
    sum += arr[i];
    i = i + step;
  }
  return sum
}

// not working
function rangeStepReverse (start, end, step){
  var arr = range(start, end);
  var sum = 0;
  var i = end - 1;
  while(i > 0){
    sum += arr[i];
    i = i - step;
  }
  return sum

}

// the step is when the array is built, not in the sum! Modify
function rangeStep (start, end, step) {
  if(!step)
    step = 1;
  return rangeStepPart(start, end,step);
}

// n Send to github
