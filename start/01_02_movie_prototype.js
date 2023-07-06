// Write your code here
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverView() {
    return `${this.title} is a ${this.genre}, film directed by ${this.director}, was released in ${this.releaseYear}. it recived a rating of ${this.rating}`
  }
}
const a = new Movie("newFilm","new Director","a new kind of movies","2023",7); 
console.log(a.getOverView())