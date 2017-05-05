// Minimum

function min(v1, v2) {
  return v1 != v2? v1 < v2 ? v1 : v2 : "They are the zame!";
}


console.log(min(1024, 123));
// → 0
console.log(min(-3000, -3000));
// → -10

console.info('------------');

// Recursion. Check if a value is even
/*
  Zero is even.
  One is odd.
  For any other number N, its evenness is the same as N - 2.
*/

function isEven(v) {
  v < 0 ? v = v * -1 : v;
  return v === 0 ? true : v === 1 ? false : isEven(v - 2);
}

//-------

console.log(isEven(5020));

console.log(isEven(75));

console.log(isEven(-1));

console.info('------------');

// Bean counting

function isEqual (){
  return "b" === "B" ? true : false;
}

console.log(isEqual());

console.info('------------');

function countBs (passedString){
  counter = 0;
  for(n = 0; n < passedString.length; n++)
    passedString.charAt(n) === "B" ? counter += 1 : null;
  return counter;
}

console.log(countBs("BBCBBnknkbgB vfB"));

console.info('------------');

function countChar (passedString, c) {
  counter = 0;
  for(n = 0; n < passedString.length; n++)
    passedString.charAt(n) === c ? counter += 1 : null;
  console.warn(c);
  return counter;
}


console.warn(countChar("BBCBBnknkbgB vfB kk", "k"));


