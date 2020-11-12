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
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}