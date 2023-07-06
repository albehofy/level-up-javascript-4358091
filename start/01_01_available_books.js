// Write your code here
class Books {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  //   check availability
  get availability() {
    return this.getAvailability();
  }

  // adding get availability method
  getAvailability() {
    if (this.numCopies === 0) {
      return `out of stock`;
    } else if (this.numCopies < 10) {
      return `low stock`;
    } else {
      return `in stock`;
    }
  }

  // adding sell method
  sell(numSold = 1) {
    if (this.numCopies - numSold >= 0) {
      this.numCopies = this.numCopies - numSold;
    } else {
      return `we can't processing this's request, stock is empty`;
    }
  }

  // adding restock method
  restock(numCopies = 5) {
    this.numCopies = this.numCopies + numCopies;
  }
}

// testing books Class
const newBook = new Books("title", "author", "ISBN", 0);
console.log(newBook.availability);
newBook.restock(7)
console.log(newBook.availability);
newBook.restock()
console.log(newBook.availability);
newBook.sell(3)
console.log(newBook.availability);