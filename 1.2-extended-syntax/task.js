function getResult(a,b,c){
    // код для задачи №1 писать здесь
    "use strict";
		const x = [];
		let result = null;
        let disc = b ** 2 - 4 * a * c;
        if (disc === 0) { 
			result = (-b) / (2 * a);
			x.push(result);
        } else if (disc > 0) {
			result = ((-b) + Math.sqrt(disc)) / 2 * a;
			x.push(result);
			result = ((-b) - Math.sqrt(disc)) / 2 * a;
			x.push(result);
		}
		return x;
}

function getAverageMark(marks){
	// код для задачи №2 писать здесь
	let num = 0;
  	let averageMark = 0;
	let numberValues = marks.length;
  	if (numberValues === 0) {
    	return averageMark;
  	}
  	if (numberValues > 5) {
    	marks = marks.slice(0, 5);
    	numberValues = marks.length;
    }
  	for (let value of marks ) {
    	num += value;
  	}
  
  	averageMark = num / numberValues;
  
  	return averageMark;
}

function askDrink(name,dateOfBirthday){
	// код для задачи №3 писать здесь
	let result = '';
  	let yearBirthday = new Date(dateOfBirthday).getFullYear();
  	let yearNow = new Date().getFullYear();
  	if ((yearNow - yearBirthday) < 18) {
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
  	} else {
    	result = `Не желаете ли олд-фэшн, ${name}?`
  	}
    return result;
}