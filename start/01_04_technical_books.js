class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here
class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title,author,ISBN,numCopies)
    this.edition = edition; 
  }
  getEdition(){
    return `the curent version of this book is ${this.edition}`
  }
}

const NewTechnicalBook = new TechnicalBook("title", "author", "ISBN", 10,2023)

console.log(NewTechnicalBook)