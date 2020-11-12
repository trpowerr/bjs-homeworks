//Задача 1

String.prototype.isPalindrome = function () {
  let str = this.toLowerCase().replace( /\s/g, '');
  const strReverse = str.split('').reverse().join('').replace( /\s/g, '');
  return str === strReverse
}

//Задача 2

function getAverageMark(marks) {
  let average = 0; 
  for (let value of marks) {
    average += value;
  }
  const roundedAverage = Math.round(average / marks.length);
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

