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


// HISTORICAL LIFE EXPENTANCY

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// create an array with centuries as keys and arrays of people that deceased in that century as value

// !!! map only applies to arrays!!!
// but ancestry is an array of objects
function ages (arr) {
  arr.map(function(person) {
    return person.died - person.born;
  })
}
var agesAncesters = ages(ancestry);

// Organize people by century of death

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// build array with ages
const prova = function (arr){
  var byCenturies = []
  for(let i = 0; i < arr.length; i++) {
    var century = Math.ceil(arr[i].died / 100);
    if(!byCenturies.includes(century)){
      byCenturies.push(century);
    }
  }
  return byCenturies;
}
console.log(prova(ancestry));

// do we need this variable in the global space?
var centuries = [];

// populate centuries

const createCenturies = function (arr){
  arr.map(function (person) {
  var century = Math.ceil(person.died / 100);
  if(!centuries.includes(century)){
      centuries.push(century);
    }
  })
  return centuries.sort();
}

// now the byCenturies needs to be an array of object, not of integers, that groups the persons
