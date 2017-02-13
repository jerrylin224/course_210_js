function sumOfSums(array) {
  var total = 0;
  return array.map(function(num){
    return total += num;
  }).reduce(function(sum, newNum){
    return sum + newNum;
  }, 0);
}

function sumOfSums(array) {
  var total = 0
  var newArray = array.reverse();
  for (var i = 0; i < array.length; i++) {
    total += newArray[i] * (i + 1);
  }
  
  return total;
}