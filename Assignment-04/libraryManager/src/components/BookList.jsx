import BookCard from './BookCard';
import React, { useContext } from 'react';
import { BooksContext } from '../App';
const BookList = () => {
  const { books } = useContext(BooksContext);
  return (
    <div>
    <h2 style={{ color: 'red' }}>Book List</h2>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '20px',
      color:"black"
    }}>
      {books.map(book => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  </div>

  );
    
};

export default BookList;