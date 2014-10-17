// given an array with duplicates: [5, 4, 1, 2, 3, 2, 5, 6, 8, 9, 7]
// how would you remove the duplicates?

// just push one by one onto a new array. if it's already on the new array, skip.

var input = [5, 4, 1, 2, 3, 2, 5, 5, 4, 6, 8, 9, 7];
var result = [];

input.forEach(function(val) {
  if (result.indexOf(val) === -1) {
    result.push(val);
  }
});

console.log(input);
console.log(result);


// better answer is to use an object as an associative array.
// that way you don't have to search through the entire result array again O(n).


var resultObj = {};
var output = [];

input.forEach(function(val) {
  if (!resultObj[val]) {
    output.push(val);
    resultObj[val] = true;
  }
});

console.log(input);
console.log(output);