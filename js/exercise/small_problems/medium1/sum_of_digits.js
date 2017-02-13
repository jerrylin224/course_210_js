

function sum(num) {
  return num.toString().split('').reduce(function(total, numString){
    return total + parseInt(numString, 10);
  }, 0);
}