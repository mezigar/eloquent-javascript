//доделать
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

function arrayToList(arr) {
  list = {};
  arr = reverseArrayInPlace(arr);
  for ( let i = 0; i < arr.length ; i++){
   
    list = {value: arr[i], rest: list};
   
  }
  return list
}

function listToArray(list) {
  arr = [];
  for ( let node = list; node; node = node.rest){
    arr.push(node.value);
  }
  return arr;
}
