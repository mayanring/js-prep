// write a function that checks whether a given number is prime.
// a number is prime if it is only divisible by itself and 1.

function isPrime(n) {

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

var input = [37, 53, 121, 170, 151, 153];

input.forEach(function(val) {
  var result = isPrime(val);
  console.log(val + ': prime is ' + result);
});