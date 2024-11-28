import HighRatedBooks from './components/HighRatedBooks';
import BookDetails from './components/BookDetails';
import FictionBooks from './components/FictionBooks';
import BookAuthors from './components/BookAuthors';
import Books from './components/books.mjs'

function App() {

  return (
    <div style={{ height: "auto", display: "flex", flexDirection: "column", backgroundColor: "grey", padding: "20px", textAlign: "center" }}>
    <h1 style={{ color: "#333", fontSize: "2rem", marginBottom: "20px" }}>Library Manager</h1>
    <HighRatedBooks Books={Books} />
    <BookDetails Books={Books}/>
    <FictionBooks Books={Books}/>
    <BookAuthors Books={Books}/>
  </div>
  )
}

export default App
