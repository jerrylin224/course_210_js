function digitList(number) {
  var newArray = [];
  do {
    newArray.push(number % 10);
    number = Math.floor(number / 10);
  } while(number > 0);

  return newArray.reverse();
}


function digitList(number) {
  var newStringArray = number.toString().split('');
  var newArray = [];
  for (i = 0; i < newStringArray.length; i++) {
    newArray.push(parseInt(newStringArray[i]));
  }

  return newArray
}