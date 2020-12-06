let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function flattening(arr) {
  return arr.reduce((part,current) => { return part.concat(current);})
}
console.log(flattening(arrays))
// → [1, 2, 3, 4, 5, 6]
