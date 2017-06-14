// EXERCISES CHAPTER 5

// FLATTENING

var arrays = [[1, 2, 3], [4, 5], [6]];

// define empty array to pass as first paramenter
var arrFlat = arrays.reduce(
  function (a, b) {
    return a.concat(b);
});

// MOTHER-CHILD AGE DIFFERENCE

// transform ancestry file to object
const ancestry = JSON.parse(ANCESTRY_FILE);

// average is expecting an array with the age differences
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function ageDifference (birthYearChild, birthYearMother) {
  return birthYearChild - birthYearMother;
}

// console.log(ancestry[0].born);
// console.log(ancestry[0].mother);
// console.log(ancestry[0].name);
// console.log(byName[ancestry[0].mother].born);

// Filter individuals with a mother with data
var withMother = ancestry.filter(function(person) {
  console.log(byName[person.mother]);
  return byName[person.mother];
});

// return person.died - person.born > 90;
