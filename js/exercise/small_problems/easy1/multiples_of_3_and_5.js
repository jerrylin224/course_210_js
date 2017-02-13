function multisum(number) {
  var sum = 0;
  for (i = 1; i < number + 1; i++) {
    if (i % 3  === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}


console.log(multisum(10));