// Make this statement work.
// [1,2,3,4,5].duplicator();
// result: [1,2,3,4,5,1,2,3,4,5]

Array.prototype.duplicator = function() {
  return this.concat(this);
}

var arr = [1,2,3,4,5];
console.log(arr.duplicator());