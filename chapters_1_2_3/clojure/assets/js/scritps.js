// Clojure

function add (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

var addClojure = add(5);
console.log(addClojure(10)(20));

/*
  addClojure is storing the function:
  return function (b) {
      return function (c) {
        return a + b + c;
      }
    }

  and the value (a) the = 5 in this case

  This is clojure storing the functions and the value of some parameters. The variable can still be accessed

  In other words, this feature—being able to reference a specific instance of local variables in an enclosing function—is called closure. A function that “closes over” some local variables is called a closure.

*/

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(10));

console.log("With currying " + multiplier(2)(2));

/*
  In the example, multiplier returns a frozen chunk of code that gets stored in the twice variable. The last line then calls the value in this variable, causing the frozen code (return number * factor;) to be activated. It still has access to the factor variable from the multiplier call that created it, and in addition it gets access to the argument passed when unfreezing it, 5, through its number parameter.
*/

function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

/*
  Clojure happens thanks to the ability to treat functions as values, combined with the fact that local variables are "re-created" every time a function is called. Multiple instances can be alive at the same time, which is a good illustration of the concept that local variables really are re-created for every call. Different calls can't trample on one  another's local variables
*/
/*
 I ara un exemple ideat per mi
 Suposem que volem una funciço que ens dçoni el resultat d'elevar a la potència n,,
 de mmanera que poden intanciar una funció per a crear diferent funcions, com quadrat, cub, etc...
 I tot gràcies a la utilització de clojures
*/

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

var cub = power(3);
var aLaQuarta = power(4);

console.log(`Utilitzant clojure faig la funció 'cub', amb la que faig el cub de 10 = ${cub(10)}`);
console.log(`Utilitzant clojure faig la funció 'aLaQuarta', amb la que calculo 2 a la quarta = ${aLaQuarta(2)}`);

console.info('------------');
console.info(`'/''\\''/CLOJURE ROCKS!!!\\''/''\\'`);
console.info('------------');







