import BookCard from './BookCard';

const FictionBooks = (props) => {
    const fictionBooks = props.Books.filter(book => book.genre === 'Fiction');

    return (
      <div>
        <h2 style={{ color: '#2c3e50' }}>Fiction Books</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '20px',
          color:"black"
        }}>
          {fictionBooks.map(book => <BookCard key={book.id} {...book} />)}
        </div>
      </div>
    );
  };

export default FictionBooks;