import BookCard from './BookCard';
const BookDetails = (props) => (
    <div>
    <h2 style={{ color: '#2c3e50' }}>All Books</h2>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '20px',
      color:"black"
    }}>
      {props.Books.map(book => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  </div>
);

export default BookDetails;