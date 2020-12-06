function loop(value, condition, update, body) {
  while(condition(value)) {
   body(value);
   value = update(value);
  }
  
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
