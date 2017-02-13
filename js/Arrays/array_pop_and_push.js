
function pop(array) {
  var poppedElement = array[array.length - 1];
  array.splice(array.length - 1);

  return poppedElement;
}

// splice如果只有一個數字的話，那就是預設把那個element去除


function push(array) {
  for (var i = 1, length = arguments.length; i < length; i++) {
    array[array.length] = arguments[i];
  }

  return array.length;
}

var a = [1, 2, 3];
a.push(4, 5);

console.log(a); 

// push是直接把argument中的東西push進去，你給他element就push element; 你給他array就push array.