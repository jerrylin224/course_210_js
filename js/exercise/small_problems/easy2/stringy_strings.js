function stringy(number) {
  result = ''
  for ( i = 0; i < number; i++){
    if (i % 2 === 0){
      result += '1';
    } else {
      result += '0';
    }
  }

  return result;
}


console.log(stringy(6));
console.log(stringy(9))