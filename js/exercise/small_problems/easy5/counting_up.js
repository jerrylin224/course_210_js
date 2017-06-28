function sequence(num) {
  var newArray = [];
  for (var i = 1; i < num + 1; i++) {
    newArray.push(i);
  }

  return newArray;
}

function sequence(n) {
  return Array(n).fill(1).map(function(value, index) {
  return value + index;
  });
}

// Array[n] will return an array filled with n undefined element
// fill make all the element have the same static value
// use the value(1) + index(0....n-1) as return value