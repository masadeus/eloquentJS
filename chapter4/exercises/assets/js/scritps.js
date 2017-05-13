// EXERCISES CHAPTER 4

// Sum of a range

// create arrays with two paramenters
function range (start, end) {
  var arrRange = []
  for (i = start; i <= end; i++) {
    arrRange.push(i);
  }
  return arrRange
}

// Create arrays with a three paramentes. The third is used to build the array only by increments of the step
// Note that from here on I am using ES6 arrow functions, don't be scared they are not a big deal ;)
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions

var rangeStep = (start, end, step) => {
  var arrRange = [];
  var i = start;
  if (!step || isNaN(step) )
      step = 1;
  if (step > 0) {
    while(i <= end) {
      arrRange.push(i);
      i += step;
    }
    return arrRange;
  }

  // reverses the array if negative values
  else {
    step = Math.abs(step);
    while(i <= end) {
      arrRange.unshift(i);
      i += step;
    }
    return arrRange;
  }
}

// sum the elements of the arrays
function sumRange (arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
 return sum
}

// Reverse array, using JS native methods
var reverseArray = (arr) => {
  var i = 0;
  var arrElts = arr.length;
  var last;
  var reversedArr = []
  while(i < arrElts) {
    last = arr.pop();
    reversedArr.push(last);
    i += 1;
  }
  arr = reversedArr
  return arr;
}

// Reverse array, without creating another array
var reverseArrLow = (arr) => {
  var arrLen = arr.length;
  var last;
  for(i = 0; i < arrLen; i++) {
    last = arr.pop();
    arr.splice(i, 0, last)
  }
  return arr;
}

// Data Structures: Array to list

arr1 = [1, 2, 3];

// we need to transform it into the following object

var list1 = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 'a',
      rest: {
        value: 4.23,
        rest: {
          value: 4,
          rest: null
        }
      }
    }
  }
};

function arrayToList (arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--)
    list = {
      value: i,
      rest: list
    };
  return list;
}


function listToArray (list) {
  var arrFromList = [];
  for (var node = list; node; node = node.rest) {
    arrFromList.push(node.value);
  }
  return arrFromList;
}

// HELPERS FOR listToArray

// Prepend. Creates a new list given a value and a list.
var prepend = (oldValue, oldList) => {
  var newList = {
    value: oldValue,
    list: oldList
  }
  return newList;
}

// nth return the nth element of a list
var nth = (list, value) => {
  if (listToArray(list)[value])
    return listToArray(list)[value];
}

// nth recursive
var nthR = (list, n) => {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nthR(list.rest, n - 1);
}

// Deep object comparison

var obj = {here: {is: "an"}, object: 2};

var objNull =  null;

var objecte =  {here: {is: "another kind of"}, object: 2};

var deepEqualA = (a, b) => {
  if((typeof(a) == "object" && a) && (typeof(b) == "object" && b)){

    var keysA = Object.keys(a);
    var keysB = Object.keys(b);

    if (keysA.length !== keysB.length){
      console.info("Not the same amount of properties");
      return false
    }

    for(var i = 0; i < keysA.length; i++) {
      if(keysA[i] === keysB[i]){
        if(typeof(a[keysA[i]]) == "object"){
           deepEqualA(a[keysA[i]], b[keysB[i]]);
        }
        else if ((a[keysA[i]] !== b[keysB[i]]))
          return false;
        else  {
        return true;
        }
      }
    }
  }
  else
    return false
}

// Deep object comparison using for/in loop, the better way.
// I recommend to check Marijn Haverbeke's solution, it is much more elegant.

var deepEqualB = (a, b) => {
  // remember that in JS objects are compared by reference, not by value
  if((typeof(a) == "object" && a) && (typeof(b) == "object" && b)){

    var keysA = Object.keys(a);
    var KeysB = Object.keys(b);

    if (keysA.length !== KeysB.length){
      return false;
    }

    for (let prop in a) {
      // check if prop exists in b
      if (b.hasOwnProperty(prop)) {

        if(a[prop] === b[prop])
          return true;

        // if is obj apply deep comparison again
        // if it were an object === will not work to compare the value
        if(typeof(a[prop] == 'object')){
          deepEqualB(a[prop], b[prop]);
        }

        else if(a[prop] !== b[prop]){
          return false;
        }
      }
    }
  }
}
