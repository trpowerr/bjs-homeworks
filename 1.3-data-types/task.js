'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
	const arrArgumentsFun = ['percent', 'contribution', 'amount', 'date']; 
	const arrControlValue = [];
	arrControlValue.push(percent, contribution, amount, date);
	for (let i = 0; i < arrControlValue.length - 1; i++) {
		if (isNaN(arrControlValue[i])) {
			return `Параметр <${arrArgumentsFun[i]}> содержит неправильное значение <${arrControlValue[i]}>`;
		}
	}
	if ((amount - contribution) <= 0) {
		return 0;
	}
	let bodyCredit = amount - contribution;
	let monthNum = ((new Date(date).getFullYear() - new Date().getFullYear()) * 12) - Math.abs(new Date().getMonth() - new Date(date).getMonth());
	
	let paymentMonth = bodyCredit * ((percent / 1200)+(percent / 1200)/(((1+(percent / 1200)) ** monthNum)-1));
	
	
	let totalAmount = Number.parseFloat((paymentMonth * monthNum).toFixed(2));
	console.log(totalAmount)
	
  return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (!name) {
		name = 'Аноним'
	}
	
	console.log(`Привет, мир! Меня зовут ${name}.`)
  	return `Привет, мир! Меня зовут ${name}.`;
}