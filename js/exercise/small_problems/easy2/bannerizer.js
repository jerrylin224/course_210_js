function printInBox(message) {
  var border = '+' + repeated('-', message.length + 2) + '+';
  var emptyline = '|' + repeated(' ', message.length + 2) + '|';
  var messageline = '| ' + message + ' |';
  var banner = border + '\n'+ emptyline + '\n' + messageline + '\n' + emptyline + '\n' + border;
  
  return banner;
}


function repeated(char, times) {
  var result = '';
  for (i = 0; i < times; i++){
    result += char;
  }

  return result;
}


console.log(printInBox("To boldly go where no one has gone before."));