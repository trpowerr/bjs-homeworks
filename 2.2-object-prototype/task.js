//Задача 1

String.prototype.isPalindrome = function () {
  let str = this.toLowerCase().replace( /\s/g, '');
  const strReverse = str.split('').reverse().join('').replace( /\s/g, '');
  if (str === strReverse) {
    return true;
  } else {
    return false;
  }
}


function getAverageMark(marks) {
  let average = 0; 
  for (let value of marks) {
    average += value;
  }
  average = average / marks.length;
  const roundedAverage = Math.round(average);
  return roundedAverage || 0;
}


function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}