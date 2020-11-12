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

//Задача 2

function getAverageMark(marks) {
  let average = 0; 
  for (let value of marks) {
    average += value;
  }
  average = average / marks.length;
  const roundedAverage = Math.round(average);
  return roundedAverage || 0;
}

//Задача 3

function checkBirthday(birthday) {
    let now = Date.now();
    birthday = new Date(birthday)
    let diff = now - (+birthday);
    let age = diff / 31556952000;
    

    return age > 18;
}

