// write a summing function that takes a variable number of arguments.

function sum() {
  var result = 0;
  var args = Array.prototype.slice.call(arguments);

  args.forEach(function(val) {
    result += val;
  });

  return result;
}

// quick test
console.log(sum(3,4,5,6,7));