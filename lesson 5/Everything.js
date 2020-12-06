function every(array, predicate) {
  for (let value of array){
    if(!predicate(value)) {
      return false;
    }
    
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}
