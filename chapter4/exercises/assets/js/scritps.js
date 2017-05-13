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

var deepEqual = (obj1, obj2) => {
  if((typeof(obj1) == "object" && obj1) && (typeof(obj2) == "object" && obj2)){

    var objKeys1 = Object.keys(obj1);
    var objKeys2 = Object.keys(obj2);

    if (objKeys1.length !== objKeys2.length){
      console.info("Not the same amount of properties");
      return false
    }

    for(var i = 0; i < objKeys1.length; i++) {
      console.info("in the loop");
      if(objKeys1[i] === objKeys2[i]){

        console.log(objKeys1[i]);
        console.warn(typeof(objKeys1[i]));
        console.log(obj1[objKeys1[i]]);
        console.warn(typeof(obj1[objKeys1[i]]));

        if(typeof(obj1[objKeys1[i]]) == "object"){
           deepEqual(obj1[objKeys1[i]], obj2[objKeys2[i]]);
        }
        else if ((obj1[objKeys1[i]] !== obj2[objKeys2[i]]))
          return false;
        else  {
        return true;
        }
      }
    }
  }
}

// Deep object compaarison using for/in loop

var deepEqual_ = (obj1, obj2) => {
  if((typeof(obj1) == "object" && obj1) && (typeof(obj2) == "object" && obj2)){

    var objKeys1 = Object.keys(obj1);
    var objKeys2 = Object.keys(obj2);

    if (objKeys1.length !== objKeys2.length){
      console.info("Not the same amount of properties");
      return false
    }
    for (prop in obj1) {
      // check if they are the same
      console.log(prop);
      // check if prop exists in obj2
      if (obj2.hasOwnProperty(prop)) {
        if(obj1[prop] !== obj2[prop])
          return false;
        // if obj apply deep comparison again
        if(typeof(obj1[prop] == 'object'))
          deepEqual_(obj1[prop], obj2[prop]);
        else
          return true;
      }
    }
  }
}
