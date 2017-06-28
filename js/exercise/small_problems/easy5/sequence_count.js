function sequence(num, times) {
  var newArray = [];
  for (i = 1; i < times + 1; i++) {
    newArray.push(num * i);
  }

  return newArray;
}

function sequence(time, num) {
  var mapArray = Array(time).fill(num);
    return mapArray.map((value, index) => value * (index + 1));
}