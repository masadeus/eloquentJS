// EXERCISES CHAPTER 5

// FLATTENING

var arrays = [[1, 2, 3], [4, 5], [6]];

// define empty array to pass as first paramenter
var arrFlat = arrays.reduce(
  function (a, b) {
    return a.concat(b);
});

// MOTHER-CHILD AGE DIFFERENCE

const ancestry = JSON.parse(ANCESTRY_FILE);
