//Задача 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state (state) {
    if (state <= 0 ) {
      this._state = 0;
    } else if (state >= 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state () {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

//Задача 2

class Library {
  constructor (name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state >= 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const result = this.books.find(item => item[type] == value);
    return result || null;
  }

  giveBookByName(bookName) {
    const result = this.books.findIndex(item => item.name == bookName);
    return result >=0 ? this.books.splice(result,1)[0] : null;
  }
}

// Задача 3

class StudentLog {
  constructor(name) {
    this.name = name;
    this.algebra = [];
    this.geometry = [];
    this.math = [];
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if ( 1 >= grade ||  grade <= 5) {
      this[subject].push(grade)
      return this[subject].length
    } else {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
      return this[subject].length
    }
  }

  getAverageBySubject(subject) {
    let average = 0;
    for (let value of this[subject]) {
      average += value;
    }
    return average / this[subject].length || 0;
  }

  getTotalAverage() {
    let totalAverage = 0;
    const arrAverage = this.geometry.concat(this.algebra, this.math);
    for (let value of arrAverage) {
      totalAverage += value;
    }
    return totalAverage / arrAverage.length || 0;
  }
}
