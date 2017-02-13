function triangle(height){
  var star = 1;
  var space = height - 1;

  for (i = 1; i < height + 1; i++){
    console.log(repeated(' ', space) + repeated('*', star));
    star++;
    space--;
  }
}

function repeated(char, times){
  var result = '';
  for (i = 0; i < times; i ++){
    result += char;
  }

  return result;
}



console.log(triangle(5))