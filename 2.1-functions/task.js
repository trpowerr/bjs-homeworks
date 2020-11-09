// Задача 1
function getSolutions( a, b, c ) {
	const D = b ** 2 - 4*a*c;
	if (D < 0) {
		return { D: D, roots: [] };
	} else if (D === 0){
			const x1 = -b / 2*a;
			return { D: D, roots: [x1] };
	} else {
			const x1 = ((-b) + Math.sqrt(D)) / (2 * a);
			const x2 = ((-b) - Math.sqrt(D)) / (2 * a);
			return { D: D, roots: [x1, x2] };
	}

}

function showSolutionsMessage(a, b, c) {
	const result = getSolutions(a, b, c);
	console.log(result);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0) {
		console.log('Уравнение не имеет вещественных корней');
	} else if(result.D === 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
	} else {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
	}

}

// Задача 2

function getAverageScore(data) {
	let averageMarkArr = [];
	for (let value in data) {
		data[value] = getAverageMark(data[value]);
		averageMarkArr.push(data[value]);
	}
	data.average = getAverageMark(averageMarkArr);
	return data
}

function getAverageMark(marks) {
	let averageMark = 0
	for (let value of marks) {
		averageMark += value;
	}
	return averageMark / marks.length || 0
}

// Задача 3

function getPersonData(secretData) {
	return {
		firstName: getDecodedValue(secretData.aaa),
		lastName: getDecodedValue(secretData.bbb)
	}
}

function getDecodedValue(secret) {
	return (secret === 0) ? 'Родриго' : 'Эмильо';
}
