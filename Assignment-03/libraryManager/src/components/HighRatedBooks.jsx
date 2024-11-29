import BookCard from './BookCard';

const HighRatedBooks = (props) => {
    const highRated = props.Books.filter(book => book.rating > 4.5);

    return (
      <div>
        <h2 style={{ color: 'red' }}>High Rated Books</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '20px',
          color:"black"
        }}>
          {highRated.map(book => <BookCard key={book.id} {...book} />)}
        </div>
      </div>
    );
};

export default HighRatedBooks;