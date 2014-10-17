// write a function to return the nth fibonnacci number in the fib seqeuence.
// 1, 1, 2, 3, 5, 8, 13, ...


function fib(n) {
  if (n <= 2) {
    return 1;
  }

  return fib(n-2) + fib(n-1);
}

console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));