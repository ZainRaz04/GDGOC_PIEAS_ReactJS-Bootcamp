import HighRatedBooks from './components/HighRatedBooks';
import BookDetails from './components/BookDetails';
import FictionBooks from './components/FictionBooks';
import BookAuthors from './components/BookAuthors';
import Books from './components/books.mjs'
import React, { createContext, useState } from 'react';
import BorrowedBooks from './components/BorrowedBooks';
import FavBooks from './components/FavBooks';


export const BorrowedBooksContext = createContext();
export const FavBooksContext = createContext();

function App() {

  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  return (
    <BorrowedBooksContext.Provider value={{ borrowedBooks, setBorrowedBooks }}>
      <FavBooksContext.Provider value={{ favBooks, setFavBooks }}>
          <div style={{ height: "auto", display: "flex", flexDirection: "column", backgroundColor: "black", padding: "20px", textAlign: "center" }}>
          <h1 style={{ color: "white", fontSize: "2rem", marginBottom: "20px"}}>Library Manager</h1>
          <HighRatedBooks Books={Books} />
          <BookDetails Books={Books}/>
          <FictionBooks Books={Books}/>
          <BookAuthors Books={Books}/>
          <BorrowedBooks />
          <FavBooks />
        </div>
      </FavBooksContext.Provider>
    </BorrowedBooksContext.Provider>
  )
}

export default App
