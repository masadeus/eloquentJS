// EXERCICES CHAPTER 4

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


