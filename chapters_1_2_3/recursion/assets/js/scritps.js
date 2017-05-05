// Recursion

function power(exponent) {
  return function(base) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
      result *= base;
    return result
  };
}

var quadrat = power(2);
console.log(quadrat(4));
console.log(power(2)(4));

console.info('------------');

// Now let's make this function recursive

function powerR(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * powerR(base, exponent - 1);
}

console.log(powerR(2, 3));

console.info('------------');

// And now in es6

const powerRES6 = (base, exponent) => {
  if (exponent == 0)
    return 1;
  else
    return base * powerRES6(base, exponent -1);
}

console.warn(`And this is how it looks the result of a recursive function in ES6: ${powerRES6(2, 4)}`);

function printFarmAnimals(beastName, amount) {
  var both = String(amount);
  while (both.length < 3)
    both = "0" + both;
  console.log(both + " " + beastName);
}
printFarmAnimals("pigs",11);

function printAllAnimals(cows, chicken, pigs) {
  printFarmAnimals("cows", cows);
  printFarmAnimals("pigs", pigs);
  printFarmAnimals("chickens", chicken);
}

printAllAnimals(23, 2, 1);

console.info('------------');
