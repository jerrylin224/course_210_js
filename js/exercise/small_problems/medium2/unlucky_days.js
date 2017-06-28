function fridayThe13ths(year)  {
  var date;
  var count = 0;

  for (var i = 1; i <= 12; i++) {
    date = new Date(year, i, 13);
    if (date.getDay() === 5) count++;
  }
  
  return count;
}