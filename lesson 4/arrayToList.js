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
  list = null;
  arr = reverseArrayInPlace(arr);
  for ( let i = 0; i < arr.length ; i++){
   
    list = {value: arr[i], rest: list};
   
  }
  return list
}

function prepend(value, list) {
  return {value, rest: list};
}

function listToArray(list) {
  arr = [];
  for ( let node = list; node; node = node.rest){
    arr.push(node.value);
  }
  return arr;
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
