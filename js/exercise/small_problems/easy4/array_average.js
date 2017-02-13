function average(array) {
  var sum = array.reduce(function(a, b) {
  return a + b;
    }, 0);
    
  return (Math.floor(sum / array.length));
}
