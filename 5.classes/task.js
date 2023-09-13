class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(number) {
        if (number < 0) {
            this._state = 0
        } else if (number > 100) {
            this._state = 100
        } else this._state = number;
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (const book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                const removedBook = this.books.splice(i, 1);
                return removedBook[0];
            }
        }
        return null;
    }
}

const myLibrary = new Library("Библиотека им. Маяковского");

myLibrary.addBook(
    new NovelBook(
        "Роман Лисицын",
        "Кукушка улетела",
        1919,
        143
    )
)
myLibrary.addBook(
    new DetectiveBook(
        "Роман Лисицын",
        "Кукушка прилетела",
        1921,
        180
    )
)
const givenBook = myLibrary.giveBookByName("Кукушка прилетела")
console.log(givenBook.name);
givenBook.state -= 40;
console.log(givenBook.state);
givenBook.fix();
console.log(givenBook.state);
myLibrary.addBook(givenBook);
console.log(myLibrary.findBookBy("name", "Кукушка прилетела"));