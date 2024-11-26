import { Books } from "./books.mjs";
// console.log(Books)

console.log("The titles of books with rating > 4.5 are as follows :-")
const highRatedBooks = Books.filter((book => book.rating > 4.5))
const highRatedBooks_titles = highRatedBooks.map((books=>books.title))
console.log("Books with rating higher than 4.5:", highRatedBooks_titles);




console.log("The details of all the books are as follows :-")
const printBookDetails = () => {
    for (let i = 0; i < Books.length; i++) {
      const { title, author, rating, genre } = Books[i];
      console.log("Title :",title," Author : ", author," Rating : ",rating," Genre : ",genre );
    }
  };
  
  printBookDetails();



  console.log("The titles of books with genre FICTION are as follows :-")
  const fictionBooks = Books.filter((book => book.genre.toLowerCase() === "fiction"))
  const fictionBooks_title = fictionBooks.map((books => books.title))
  console.log("Fiction books:", fictionBooks_title);


  console.log("The authors of all the are as follows :-")
  const authors = Books.map(book => book.author);
console.log("Authors of the books:", authors);
  
  