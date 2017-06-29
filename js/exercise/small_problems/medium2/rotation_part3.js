function maxRotation(num) {
  var numToStr = String(num);
  for (var i = numToStr.length; i > 0; i--) {
    num = rotateRightmostDigits(num, i);
  }
  
  return num;
}