// find greatest common divisor of two numbers
// largest integer that divides both numbers without a remainder

function gcd(a, b) {

  var smaller = Math.min(a, b);
  var current = 1;

  for (var i = 1; i <= smaller; i++) {
    if ( a % i === 0 && b % i === 0 ) {
      current = i;
    }
  }

  return current;
}


console.log(gcd(12, 36));
console.log(gcd(36, 192));
console.log(gcd(12, 42));
console.log(gcd(32, 68));