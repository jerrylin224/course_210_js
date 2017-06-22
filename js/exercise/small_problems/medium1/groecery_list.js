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

function buyFruit(array) {
  return array.reduce(function(list, element) {
  for ( var i = 0; i < element[1]; i++) {
    list.push(element[0])
    }
  return list;
  }, []);
}

buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]