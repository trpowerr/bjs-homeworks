// Задача 1

function parseCount (count) {
  if(isNaN(Number.parseInt(count))) {
    throw new Error('Невалидное значение')
  } else {
    return Number.parseInt(count)
  }
  
}

function validateCount (value) {
  try {
    return parseCount(value)
  } catch(e) {
    return e
  }
}

// Задача 2

class Triangle{
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ( a+b<c || b+c<a || c+a<b){
        throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c
  }

  getArea() {
    const pHalf = (this.a + this.b + this.c) / 2;
    return +((Math.sqrt(pHalf*(pHalf - this.a)*(pHalf - this.b)*(pHalf - this.c))).toFixed(3))
  }
}

function getTriangle(a, b, c) {
  try{
    const triangle = new Triangle(a ,b ,c);
    return triangle;
  } catch {
    return {
      getArea() {'Ошибка! Треугольник не существует'},
      getPerimeter() {'Ошибка! Треугольник не существует'}
    }
  }
  
}

console.log(getTriangle(1,3,4));