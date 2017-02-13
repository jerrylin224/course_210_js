function asciiValue(string) {
  var sum = 0;
  for (i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

console.log(asciiValue('Four score')); 
console.log(asciiValue('Launch School'));