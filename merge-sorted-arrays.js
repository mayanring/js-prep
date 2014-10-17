// write code to merge two sorted arrays.

var a = [1, 2, 5, 6, 9, 10];
var b = [3, 5, 7, 8, 11, 24];
var result = [];

for (var i = 0, j = 0; i < a.length || j < b.length; ) {
  if ( i == a.length ) {
    result.concat(b.slice(j));
    break;
  }

  if ( j == b.length ) {
    result.concat(a.slice(i));
    break;
  }

  if ( a[i] <= b[j] ) {
    result.push(a[i]);
    i++;
  }
  else {
    result.push(b[j]);
    j++;
  }
}

console.log(a);
console.log(b);

console.log(result);