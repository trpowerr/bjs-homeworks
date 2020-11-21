// Задача 1

function parseCount (count) {
  const parseValue = Number.parseInt(count)
  if(isNaN(parseValue)) {
    throw new Error('Невалидное значение')
  } else {
    return parseValue
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
    return +((Math.sqrt((this.getPerimeter() / 2)*((this.getPerimeter() / 2) - this.a)*((this.getPerimeter() / 2) - this.b)*((this.getPerimeter() / 2) - this.c))).toFixed(3))
  }
}

function getTriangle(a, b, c) {
  try{
    return triangle = new Triangle(a ,b ,c)
  } catch(e) {
    return {
      getArea() {return 'Ошибка! Треугольник не существует'},
      getPerimeter() {return 'Ошибка! Треугольник не существует'}
    }
  }
  
}

console.log(getTriangle(1,3,100));