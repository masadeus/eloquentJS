// Currying functions: that thing of add(x)(y)(z)

function add (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

console.log(`The resule of add is ${add(3)(10)(1)} and here is more text`);


var adding = (x) => (y) => (z) => {
  return x + y + z;
}


console.log(`The result of adding is ${adding(1)(2)(43)}, and this is a curryed function` + `...`+ " AWESOME!!" + add(1)(1)(2));

