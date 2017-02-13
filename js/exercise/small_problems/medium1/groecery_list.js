function buyFruit(array) {
  var newArray = []
  var i = 1;
  array.forEach(function(sub){
    do {
      newArray.push(sub[0])
      i++;
    } while (i < sub[1] + 1);
  }):

  return newArray;
}

buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]