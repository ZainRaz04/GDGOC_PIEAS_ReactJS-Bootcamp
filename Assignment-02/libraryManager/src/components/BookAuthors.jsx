const BookAuthors = (props) => {
    const authors = props.Books.map(book => book.author);

    return (
      <div>
        <h2 style={{ color: '#2c3e50' }}>Book Authors</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {authors.map((author, index) => (
              <li key={index} style={{ margin: '5px 0', fontSize: '1.1rem' }}>
                {author}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default BookAuthors;