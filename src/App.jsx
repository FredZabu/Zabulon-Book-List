import { useState } from "react"
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (id, title) => {
    setBooks([...books, { id: id, title: title }]);
  
  }
  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }
  const handleEditBook = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title}
      }
      return book;
    })

    setBooks(updatedBooks);
  }
  return (
    <div>
      <div className="logo">
        <h1>Z</h1>
        <p>Book List</p>
      </div>
      <BookList books = {books} onDelete = {handleDeleteBook} onEdit = {handleEditBook} />
      <CreateBook onCreate = {handleCreateBook} />
    </div>
  )
}

export default App