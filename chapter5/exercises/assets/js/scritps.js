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

// console.log(byName[ancestry[0].mother].born);

// Filter individuals with a mother with data
const withMother = ancestry.filter(function(person) {
  return byName[person.mother];
});

// Calculate age difference
function difference(a, b) {
 return a - b;
}

// Calculate age differences with fixed propperty parameters
function diffObj(obj){
  return difference(obj.born, byName[obj.mother].born)
}
// Age differences array
const ageDiffArr = withMother.map(diffObj);

console.log(average(ageDiffArr).toFixed(1));

// The compact solution
var differences = ancestry.filter(function(person) {
  return byName[person.mother];
  }).map(function(person) {
    return person.born - byName[person.mother].born;
  });

console.log(average(differences).toFixed(1));
