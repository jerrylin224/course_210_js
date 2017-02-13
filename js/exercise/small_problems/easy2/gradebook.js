function getGrade(grade1, grade2, grade3){
  var average = (grade1 + grade2 + grade3) / 3;

  if (90 <= average && average <= 100){
    return 'A';
  } else if (80 <= average && average < 90){
    return 'B';
  } else if (70 <= average && average < 80){
    return 'C';
  } else if (60 <= average && average < 70){
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95))