// swap two variables, a and b, without using a third variable.
// this is a dumb question for an interview since it's so esoteric.

// for my sanity i'm going to pretend a is 3 and b is 5.
// use the power of mathemagics.

function swap(a, b) {
  var result = [];

  a = a - b;  // 3-5 = -2
  b = b + a;  // 5+-2 = 3

  a = b - a;  // 3--2 = 5

  result = [a, b];
  return result;
}

var a = 10;
var b = 20;

console.log(a);
console.log(b);

console.log(swap(a, b));