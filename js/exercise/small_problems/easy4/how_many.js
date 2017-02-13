function countOccurrences(vehicles) {
  var occurences = {};
  for (var i = 0; i < vehicles.length; i++) {
    occurences[vehicles[i]] = occurences[vehicles[i]] || 0;
    occurences[vehicles[[i]]++;
  }

  displayOccurences(occurences);
}

function displayOccurrences(occurences) {
  for (var item in occurences) {
    console.log(item + ' => ' + occurences[item]);
  }
}