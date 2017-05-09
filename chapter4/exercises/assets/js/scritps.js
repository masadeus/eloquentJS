// EXERCICES CHAPTER 4

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
