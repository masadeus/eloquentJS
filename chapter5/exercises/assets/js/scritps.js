// EXERCISES CHAPTER 5

// FLATTENING

var arrays = [[1, 2, 3], [4, 5], [6]];

function reduce_(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

// define empty array to pass as first paramenter
const arr = [];

console.log(reduce_(arrays, function(a, b){
  return a.concat(b);
}, arr));

// And now the same using the native method

console.log(arrays.reduce(function(a, b){
  return a.concat(b);
}));
